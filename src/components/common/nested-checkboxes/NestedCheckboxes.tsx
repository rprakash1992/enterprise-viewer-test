import Tree from "rc-tree";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Title from "./Title";
import { status } from "../../../constants";

interface NestedCheckboxesProps {
  treeHeight: number;
  itemHeight: number;
  productTree: any;
  setProductTree: (tree: any) => void;
  setInitialProductTree: (tree: any) => void;
  toggleVisibility: () => void;
}

export const NestedCheckboxes = ({
  treeHeight,
  itemHeight,
  productTree,
  setProductTree,
  setInitialProductTree,
  toggleVisibility,
}: NestedCheckboxesProps) => {
  const getSwitcherIcon = (obj: any) => {
    if (obj?.data?.children?.length === 0) {
      return (
        <IconChevronUp style={{ visibility: "hidden", cursor: "pointer" }} />
      );
    } else if (obj.expanded) {
      return <IconChevronUp style={{ cursor: "pointer" }} />;
    } else {
      return <IconChevronDown style={{ cursor: "pointer" }} />;
    }
  };

  const setStatus = (root: any, status: any) => {
    root.status = status;
    if (Array.isArray(root.children) && root.children.length > 0) {
      return root.children.forEach((item: any) => {
        setStatus(item, status);
      });
    }
  };

  const computeStatus = (children: any) => {
    let checked = 0;
    let indeterminate = 0;

    children.forEach((item: any) => {
      if (item.status && item.status === status.checked) checked++;
      if (item.status && item.status === status.indeterminate) indeterminate++;
    });

    if (checked === children.length) {
      return status.checked;
    } else if (checked > 0 || indeterminate > 0) {
      return status.indeterminate;
    }

    return undefined;
  };

  // Depth-first traversal
  const traverse = (root: any, needle: any, status: any) => {
    let id;
    let children;

    if (Array.isArray(root)) {
      children = root;
    } else {
      id = root.id;
      children = root.children;
    }

    if (id === needle) {
      return setStatus(root, status);
    }

    if (!Array.isArray(children) || children.length === 0) {
      return;
    }

    children.forEach((item: any) => traverse(item, needle, status));
    root.status = computeStatus(children);
  };

  const compute = (checkboxId: any, status: any) => {
    traverse(productTree[0], checkboxId, status);
    setProductTree(productTree.slice());
    setInitialProductTree(productTree.slice());
  };

  return (
    <Tree
      virtual={true}
      switcherIcon={getSwitcherIcon}
      defaultExpandAll
      showIcon={false}
      selectable={false}
      treeData={productTree}
      height={treeHeight}
      itemHeight={itemHeight}
      titleRender={(nodeData) => (
        <Title
          node={nodeData}
          compute={compute}
          toggleVisibility={toggleVisibility}
        />
      )}
    />
  );
};

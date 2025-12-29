import { status } from "./constants";
import { useStore } from "../../../store";
import { TreeItems } from "./TreeItems";

export const NestedCheckboxes = () => {
  const setStatus = (root: any, status: any) => {
    root.status = status;
    if (Array.isArray(root.items)) {
      return root.items.forEach((item: any) => {
        setStatus(item, status);
      });
    }
  };

  const computeStatus = (items: any) => {
    let checked = 0;
    let indeterminate = 0;

    items.forEach((item: any) => {
      if (item.status && item.status === status.checked) checked++;
      if (item.status && item.status === status.indeterminate) indeterminate++;
    });

    if (checked === items.length) {
      return status.checked;
    } else if (checked > 0 || indeterminate > 0) {
      return status.indeterminate;
    }
  };

  // Depth-first traversal
  const traverse = (root: any, needle: any, status: any) => {
    let id;
    let items;

    if (Array.isArray(root)) {
      items = root;
    } else {
      id = root.id;
      items = root.items;
    }

    // return if needle is found
    // we don't have to compute the status of the items if root.id === needle
    if (id === needle) {
      return setStatus(root, status);
    }

    if (!items) {
      return root;
    } else {
      items.forEach((item: any) => traverse(item, needle, status));
      root.status = computeStatus(items);
    }
  };

  const productTree = useStore((state) => state.productTree);
  const setProductTree = useStore((state) => state.setProductTree);

  const compute = (checkboxId: any, status: any) => {
    traverse(productTree, checkboxId, status);
    setProductTree(productTree.slice());
  };

  return (
    <div className="App">
      <TreeItems items={productTree} compute={compute} />
    </div>
  );
};

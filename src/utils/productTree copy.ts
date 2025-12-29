import type { NodesTree } from "../store/AssemblyTreeSlice";

const iterateAndCheckAllChildren = (
  nodesTree: NodesTree,
  checked: boolean
): NodesTree => {
  return nodesTree.map((item) => {
    if (item.type === "group") {
      return {
        ...item,
        checked,
        children: iterateAndCheckAllChildren(item.children, checked),
      };
    }

    return {
      ...item,
      checked,
    };
  });
};

export const iterateAndCheck = (
  nodesTree: NodesTree,
  nodeId: string,
  checked: boolean
): NodesTree => {
  const newTree = nodesTree.map((item) => {
    if (item.id === nodeId) {
      if (item.type === "group") {
        return {
          ...item,
          checked,
          children: iterateAndCheckAllChildren(item.children, checked),
        };
      }
      return {
        ...item,
        checked,
      };
    }

    if (item.type === "group") {
      const children = iterateAndCheck(item.children, nodeId, checked);
      return {
        ...item,
        children,
      };
    }

    return item;
  });

  return newTree;
};

export const areAllNestedChildrenChecked = (
  nodes: NodesTree,
  nodeId: string
): boolean => {
  const allChecked = (items: NodesTree): boolean => {
    for (const item of items) {
      if (item.type === "group") {
        if (!allChecked(item.children)) {
          return false;
        }
      } else {
        if (!item.checked) {
          return false;
        }
      }
    }
    return true;
    // return false;
  };

  const findNode = (items: NodesTree): boolean => {
    for (const item of items) {
      if (item.id === nodeId) {
        if (item.type === "group") {
          return allChecked(item.children);
        }
        return item.checked === true;
      }

      if (item.type === "group") {
        if (findNode(item.children)) {
          return true;
        }
      }
    }
    return false;
  };

  return findNode(nodes);
};

export const isAnyNestedChildChecked = (
  nodes: NodesTree,
  nodeId: string
): boolean => {
  const hasCheckedDescendant = (items: NodesTree): boolean => {
    for (const item of items) {
      if (item.checked) return true;

      if (item.type === "group") {
        if (hasCheckedDescendant(item.children)) {
          return true;
        }
      }
    }
    return false;
  };

  const findNode = (items: NodesTree): boolean => {
    for (const item of items) {
      if (item.id === nodeId) {
        if (item.type === "group") {
          return hasCheckedDescendant(item.children);
        }
        return item.checked === true;
      }

      if (item.type === "group") {
        const found = findNode(item.children);
        if (found) return true;
      }
    }
    return false;
  };

  return findNode(nodes);
};

export function filterTreeByQuery(data: NodesTree, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return data;

  function dfs(node: any) {
    const selfMatches = node.name.toLowerCase().includes(q);

    if (!node.children || node.children.length === 0) {
      return selfMatches ? { ...node } : null;
    }

    const filteredChildren = node.children.map(dfs).filter(Boolean);

    if (selfMatches || filteredChildren.length > 0) {
      return {
        ...node,
        children: filteredChildren,
      };
    }

    return null;
  }

  return data.map(dfs).filter(Boolean);
}

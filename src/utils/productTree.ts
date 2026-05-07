import type { NodesTree } from "../store/AssemblyTreeSlice";

export function filterTreeByQuery(data: NodesTree, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return data;

  function dfs(node: any) {
    const selfMatches = node.title.toLowerCase().includes(q);

    if (!node.subRows || node.subRows.length === 0) {
      return selfMatches ? { ...node } : null;
    }

    const filteredChildren = node.subRows.map(dfs).filter(Boolean);

    if (selfMatches || filteredChildren.length > 0) {
      return {
        ...node,
        subRows: filteredChildren,
      };
    }

    return null;
  }

  return data.map(dfs).filter(Boolean);
}

export const setNodesAsDownloaded = (
  tree: NodesTree,
  ids: (string | number)[],
  displayModeId: string
): NodesTree => {
  return tree.map((item) => {
    let updatedAvailableModes = item.availableModes;
    if (ids.includes(item.id)) {
      updatedAvailableModes = item.availableModes.map((mode) =>
        mode.id === displayModeId ? { ...mode, isDownloaded: true } : mode
      );
    }
    return {
      ...item,
      availableModes: updatedAvailableModes,
      subRows:
        item.subRows.length > 0
          ? setNodesAsDownloaded(item.subRows, ids, displayModeId)
          : [],
    };
  });
};

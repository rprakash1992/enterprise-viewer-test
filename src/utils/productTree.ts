import type { NodesTree } from "../store/AssemblyTreeSlice";

export function filterTreeByQuery(data: NodesTree, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return data;

  function dfs(node: any) {
    const selfMatches = node.name.toLowerCase().includes(q);

    if (!node.items || node.items.length === 0) {
      return selfMatches ? { ...node } : null;
    }

    const filteredChildren = node.items.map(dfs).filter(Boolean);

    if (selfMatches || filteredChildren.length > 0) {
      return {
        ...node,
        items: filteredChildren,
      };
    }

    return null;
  }

  return data.map(dfs).filter(Boolean);
}

import { useEffect, useMemo, useState } from "react";
import { Flex, Text } from "@mantine/core";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_RowSelectionState,
} from "mantine-react-table";
import "mantine-react-table/styles.css";
import { IconEye, IconTransfer } from "@tabler/icons-react";
import { CustomActionIcon } from "../custom-action-icon/CustomActionIcon";
import type { Node, NodesTree } from "../../../store/AssemblyTreeSlice";

const ActionsCell = ({ row }: { row: MRT_Row<any> }) => {
  const isLeafRow = !row.subRows || row.subRows.length === 0;

  return (
    <Flex
      className={"rowActions"}
      justify="center"
      align="center"
      w="100%"
      h="100%"
      gap={5}
    >
      {!isLeafRow && (
        <CustomActionIcon
          icon={<IconTransfer />}
          onClick={(e) => {
            e.stopPropagation();
            row.toggleSelected();
          }}
          size="xs"
        />
      )}
      <CustomActionIcon icon={<IconEye />} size="sm" />
    </Flex>
  );
};

export const TreeTable = ({
  tableData,
  rowSelectionState,
  setCheckedLeafNodes,
  setUncheckedLeafNodes,
  setRowSelectionState,
}: {
  tableData: NodesTree;
  rowSelectionState: MRT_RowSelectionState;
  setCheckedLeafNodes: (nodes: Node[]) => void;
  setUncheckedLeafNodes: (nodes: Node[]) => void;
  setRowSelectionState: (selection: MRT_RowSelectionState) => void;
}) => {
  const [rowSelection, setRowSelection] = useState<MRT_RowSelectionState>(
    rowSelectionState || {}
  );

  const isLeafRow = (row: MRT_Row<any>) =>
    !row.subRows || row.subRows.length === 0;

  const columns = useMemo<MRT_ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Title",
        // size: 200,
        Cell: ({ cell }) => (
          <Text size="14px" c="dimmed">
            {cell.getValue<string>()}
          </Text>
        ),
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 60,
        Cell: ActionsCell,
      },
    ],
    []
  );

  const table = useMantineReactTable({
    enableRowVirtualization: true,
    columns,
    data: tableData,
    enableExpanding: true,
    enableExpandAll: true,
    enableRowSelection: true,
    enableColumnPinning: true,
    enableColumnActions: false,
    enableColumnOrdering: false,
    enablePagination: false,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableSorting: false,
    enableTableHead: false,
    onRowSelectionChange: setRowSelection,
    state: { rowSelection },
    mantineExpandButtonProps: {
      height: 10,
      width: 10,
      size: "sm",
    },
    mantineSelectCheckboxProps: {
      styles: {
        input: {
          width: 17,
          height: 17,
          borderRadius: 2,
        },
        icon: {
          width: 11,
          height: 11,
        },
        inner: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
    mantineTableContainerProps: {
      style: {
        width: 280,
        height: "100%",
        maxHeight: Object.keys(rowSelection).length > 0 ? 580 : 640,
        overflowX: "auto",
      },
    },
    mantineTableBodyRowProps: {
      style: {
        borderBottom: "none",
      },
    },
    mantineTableBodyCellProps: {
      style: {
        padding: 5,
        boxSizing: "border-box",
      },
    },
    mantineTableHeadCellProps: {
      style: {
        padding: 5,
      },
    },
    initialState: {
      expanded: true,
      columnPinning: {
        right: ["actions"],
      },
    },
  });

  useEffect(() => {
    setRowSelectionState(rowSelection);
  }, [rowSelection]);

  useEffect(() => {
    const checkedLeafNodes = table
      .getSelectedRowModel()
      .flatRows.filter(isLeafRow)
      .map((row) => row.original);

    setCheckedLeafNodes(checkedLeafNodes);
  }, [rowSelection]);

  useEffect(() => {
    const uncheckedLeafNodes = table
      .getRowModel()
      .flatRows.filter(isLeafRow)
      .filter((row) => !row.getIsSelected())
      .map((row) => row.original);

    setUncheckedLeafNodes(uncheckedLeafNodes);
  }, [rowSelection]);

  return <MantineReactTable table={table} />;
};

// import { useEffect, useState } from "react";
import { ActionIcon, Checkbox, Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconEye, IconTransfer } from "@tabler/icons-react";
import { useStore } from "../../../store";
import { iterateAndCheck } from "../../../utils/productTree";

interface TitleProps {
  text: string;
  indeterminate: boolean;
  checked: boolean;
  nodeId: string;
  toggleExpand?: () => void;
}

export const TreeItemTitle = ({
  text,
  indeterminate,
  checked,
  nodeId,
  toggleExpand,
}: TitleProps) => {
  const productTree = useStore((state) => state.productTree);
  const handleClickOne = useStore((state) => state.handleClickOne);
  const handleClickTwo = useStore((state) => state.handleClickTwo);
  const setProductTree = useStore((state) => state.setProductTree);
  const { ref, hovered } = useHover();

  const handleCheck = (newCheckedValue: boolean) => {
    const newTree = iterateAndCheck(productTree, nodeId, newCheckedValue);
    setProductTree(newTree);
  };

  return (
    <Flex
      ref={ref}
      direction="row"
      align="center"
      w={"100%"}
      flex={1}
      h="32px"
      justify="space-between"
      style={{ position: "relative" }}
    >
      <Flex direction="row" flex={1} align="center">
        <Checkbox
          mt={8}
          styles={{
            input: {
              width: 15,
              height: 15,
              borderRadius: 2,
            },
            icon: {
              width: 10,
              height: 10,
              margin: "3px 3px",
            },
          }}
          checked={checked}
          indeterminate={indeterminate}
          onChange={(event) => handleCheck(event.currentTarget.checked)}
        />
        <Text onClick={toggleExpand} c="dimmed" flex={1}>
          {text}
        </Text>
      </Flex>
      {hovered && (
        <Flex gap={2}>
          <ActionIcon variant="subtle" color="gray" onClick={handleClickOne}>
            <IconTransfer size={18} color={"var(--mantine-color-dimmed)"} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray" onClick={handleClickTwo}>
            <IconEye size={18} color={"var(--mantine-color-dimmed)"} />
          </ActionIcon>
        </Flex>
      )}
    </Flex>
  );
};

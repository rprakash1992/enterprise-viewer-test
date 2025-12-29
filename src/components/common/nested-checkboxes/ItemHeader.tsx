import { ActionIcon, Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { IconEye, IconTransfer } from "@tabler/icons-react";
import Checkbox from "./Checkbox";
import { status } from "./constants";
import { useStore } from "../../../store";

export const ItemHeader = ({ item, compute }: any) => {
  const handleClickOne = useStore((state) => state.handleClickOne);
  const handleClickTwo = useStore((state) => state.handleClickTwo);
  const { ref, hovered } = useHover();

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
          id={item.id}
          name={item.name}
          checked={item.status === status.checked}
          indeterminate={item.status === status.indeterminate}
          compute={compute}
        />
        <Text onClick={() => {}} c="dimmed" flex={1}>
          {item.name}
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

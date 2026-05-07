import { memo, useLayoutEffect, useRef } from "react";
import { ActionIcon, Text, Flex } from "@mantine/core";
import { IconEye, IconTransfer } from "@tabler/icons-react";
import { useHover } from "@mantine/hooks";
import { status } from "../../../constants";

const Title = memo(({ ...props }: any) => {
  const { toggleVisibility, compute, node } = props;
  const checked = node.status === status.checked;
  const indeterminate = node.status === status.indeterminate;
  const { id } = node;
  const { hovered, ref } = useHover();
  const inputRef = useRef<any>(null);

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
      inputRef.current.checked = checked;
    }
  }, [indeterminate, checked]);

  const handleIconClick = () => {
    inputRef.current.click();
  };

  return (
    <Flex
      ref={ref}
      direction="row"
      w="100%"
      align="center"
      h="32px"
      pl={10}
      flex={1}
    >
      <Flex
        direction="row"
        flex={1}
        // w="calc(100% - 57px)"
        maw="calc(100% - 57px)"
        align="center"
      >
        <input
          ref={inputRef}
          id={id}
          name={id}
          type="checkbox"
          onChange={() => {
            const newStatus = inputRef.current.checked
              ? status.checked
              : status.unchecked;
            compute(id, newStatus);
          }}
          // onClick={(e) => e.stopPropagation()}
        />
        <Text
          c="dimmed"
          size="14px"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            alignContent: "left",
            paddingTop: "3px",
            paddingBottom: "3px",
            paddingLeft: "5px",
            maxWidth: "calc(100% - 20px)",
          }}
        >
          {props.node.title}
        </Text>
      </Flex>
      <Flex w={57} justify="flex-end">
        {hovered && (
          <Flex>
            {props?.node?.children?.length > 0 ? (
              <ActionIcon
                variant="subtle"
                color="gray"
                onClick={handleIconClick}
              >
                <IconTransfer size={18} color={"var(--mantine-color-dimmed)"} />
              </ActionIcon>
            ) : null}
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={toggleVisibility}
            >
              <IconEye size={18} color={"var(--mantine-color-dimmed)"} />
            </ActionIcon>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
});

export default Title;

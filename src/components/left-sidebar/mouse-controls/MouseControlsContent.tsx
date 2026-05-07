import {
  Accordion,
  ActionIcon,
  Box,
  Flex,
  List,
  Select,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useColors } from "../../../hooks/useColors";
import { IconPencil, IconPlus } from "@tabler/icons-react";
import type { MouseControl } from "../../../store/MouseControlsSlice";

const controlItems = [
  "Ctrl+Alt+Left",
  "Ctrl+Alt+Middle",
  "None",
  "Ctrl+Alt+Right",
  "Middle",
  "Ctrl+Middle",
  "Shift+Middle",
  "Ctrl+Left",
  "Ctrl+Right",
  "Middle+Right",
  "Middle+Left",
  "Left",
  "Right",
];

const actionItems = [
  "PAN",
  "ROTATE",
  "ZOOM_IN",
  "ZOOM_OUT",
  "POINT_ZOOM_IN",
  "POINT_ZOOM_OUT",
];

const UserControlListItem = ({
  selectedControl,
  selectedAction,
  selectControl,
  selectAction,
}: {
  selectedControl: string | null;
  selectedAction: string | null;
  selectControl: (val: string | null) => void;
  selectAction: (val: string | null) => void;
}) => {
  return (
    <List.Item
      h={40}
      styles={{
        itemWrapper: {
          height: 40,
          width: "100%",
        },
        itemLabel: {
          height: 40,
          width: "100%",
        },
      }}
    >
      <Flex
        direction="row"
        h={"100%"}
        gap="xs"
        align="center"
        justify="space-between"
      >
        <Select
          data={controlItems}
          value={selectedControl}
          onChange={selectControl}
        />
        <Select
          data={actionItems}
          value={selectedAction}
          onChange={selectAction}
        />
      </Flex>
    </List.Item>
  );
};

const SystemControlListItem = ({
  control,
  action,
  isActive,
  onClick,
}: {
  control: string;
  action: string;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  const { ref, hovered } = useHover();
  const { textColor, hoverBgColor, activeBgColor, activeTextColor } =
    useColors();

  return (
    <List.Item
      h={40}
      px="xs"
      ref={ref}
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: isActive
          ? activeBgColor
          : hovered
          ? hoverBgColor
          : undefined,
      }}
      styles={{
        itemWrapper: {
          height: 40,
          width: "100%",
        },
        itemLabel: {
          height: 40,
          width: "100%",
        },
      }}
    >
      <Flex direction="row" h={"100%"} align="center" justify="space-between">
        <Text
          size="14px"
          c={isActive ? activeTextColor : hovered ? textColor : "dimmed"}
        >
          {control}
        </Text>
        <Text
          size="14px"
          c={isActive ? activeTextColor : hovered ? textColor : "dimmed"}
        >
          {action}
        </Text>
      </Flex>
    </List.Item>
  );
};

type Props = {
  systemMouseControls: MouseControl[];
  userMouseControls: MouseControl[];
  value: string | null;
  setValue: (val: string | null) => void;
  onPlusClick: () => void;
  onSelectControl: (j: number, val: string | null) => void;
  onSelectAction: (j: number, val: string | null) => void;
};

export const MouseControlsContent = ({
  systemMouseControls,
  userMouseControls,
  value,
  setValue,
  onPlusClick,
  onSelectControl,
  onSelectAction,
}: Props) => {
  return (
    <Box px="lg" py="xs">
      <Text>System Provided</Text>
      <Accordion
        variant="unstyled"
        styles={{
          label: {
            padding: "10px 0",
          },
        }}
      >
        {systemMouseControls.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control
              px={0}
              styles={{ label: { color: "var(--mantine-color-dimmed)" } }}
            >
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {item.items?.map((i) => (
                  <SystemControlListItem
                    control={i.control!}
                    action={i.action!}
                  />
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <Flex justify="space-between" mt="xs">
        <Text>User Provided</Text>
        <ActionIcon
          variant="subtle"
          color="var(--mantine-color-dimmed)"
          onClick={onPlusClick}
        >
          <IconPlus />
        </ActionIcon>
      </Flex>
      <Accordion
        value={value}
        onChange={setValue}
        variant="unstyled"
        chevron={<IconPencil size={18} stroke={1} />}
        styles={{
          label: {
            padding: "10px 0",
          },
          content: {
            padding: "0 5px",
          },
        }}
      >
        {userMouseControls.map((item) => (
          <Accordion.Item key={item.id} value={item.id}>
            <Accordion.Control
              px={0}
              styles={{ label: { color: "var(--mantine-color-dimmed)" } }}
            >
              {item.title}
            </Accordion.Control>
            <Accordion.Panel>
              <List listStyleType="none">
                {item.items.map((i, j) => (
                  <UserControlListItem
                    selectedControl={i.control}
                    selectedAction={i.action}
                    selectControl={(val) => onSelectControl(j, val)}
                    selectAction={(val) => onSelectAction(j, val)}
                  />
                ))}
              </List>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Box>
  );
};

import {
  Accordion,
  ActionIcon,
  Box,
  Flex,
  List,
  Select,
  Text,
} from "@mantine/core";
import { useStore } from "../../../store";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useHover } from "@mantine/hooks";
import { useColors } from "../../../hooks/useColors";
import { MouseControlsHeader } from "./MouseControlsHeader";
import { IconPencil, IconPlus } from "@tabler/icons-react";
import type { MouseControl } from "../../../store/MouseControlsSlice";
import { useState } from "react";

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
      // px="xs"
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

export const MouseControls = () => {
  const systemMouseControls = useStore((state) => state.systemMouseControls);
  const userMouseControls = useStore((state) => state.userMouseControls);
  const setUserMouseControls = useStore((state) => state.setUserMouseControls);
  const [value, setValue] = useState<string | null>("");

  const handlePlusClick = () => {
    const newId = userMouseControls.length;
    const newUserMouseControl: MouseControl = {
      id: "user_ontrol_" + newId,
      title: "User Control " + newId,
      items: [
        {
          control: "Right",
          action: "PAN",
        },
        {
          control: "Left",
          action: "ROTATE",
        },
        {
          control: "None",
          action: "POINT_ZOOM_IN",
        },
        {
          control: "None",
          action: "POINT_ZOOM_OUT",
        },
        {
          control: "Middle",
          action: "ZOOM_IN",
        },
        {
          control: "Middle",
          action: "ZOOM_OUT",
        },
      ],
    };

    setUserMouseControls([...userMouseControls, newUserMouseControl]);
  };

  const handleSelectControl = (j: number, val: string | null) => {
    const editingUserControl = userMouseControls.find(
      (ctrl) => ctrl.id === value
    );

    if (!editingUserControl) return;

    editingUserControl.items[j]["control"] = val;

    setUserMouseControls(
      userMouseControls.map((ctrl) =>
        ctrl.id === value ? editingUserControl : ctrl
      )
    );
  };

  const handleSelectAction = (j: number, val: string | null) => {
    const editingUserControl = userMouseControls.find(
      (ctrl) => ctrl.id === value
    );

    if (!editingUserControl) return;

    editingUserControl.items[j]["action"] = val;

    setUserMouseControls(
      userMouseControls.map((ctrl) =>
        ctrl.id === value ? editingUserControl : ctrl
      )
    );
  };

  // const handleSaveUserControl = () => {
  //   const userControl = userMouseControls.find((ctrl) => ctrl.id === value);
  //   if (!userControl) return;

  //   userControl.items = selectedActions.map((action, index: number) => ({
  //     action,
  //     control: selectedControls[index],
  //   }));

  //   setUserMouseControls(
  //     userMouseControls.map((ctrl) => (ctrl.id === value ? userControl : ctrl))
  //   );
  //   setValue(null);
  // };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <MouseControlsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box px="lg" py="xs">
          <Text>System Provided</Text>
          <Accordion
            // defaultValue={systemMouseControls[0].id}
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
                        // isActive={appliedDerivedType.id === i.id}
                        // onClick={() => handleClick(i)}
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
              onClick={handlePlusClick}
            >
              <IconPlus />
            </ActionIcon>
          </Flex>
          <Accordion
            // defaultValue={systemMouseControls[0].id}
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
                        selectControl={(val) => handleSelectControl(j, val)}
                        selectAction={(val) => handleSelectAction(j, val)}
                      />
                    ))}
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </Box>
      </LeftSidebarLayout.Content>
      {/* <LeftSidebarLayout.Footer>
        {value && (
          <Box p={"lg"}>
            <Button fullWidth onClick={handleSaveUserControl}>
              Save
            </Button>
          </Box>
        )}
      </LeftSidebarLayout.Footer> */}
    </LeftSidebarLayout>
  );
};

import { Accordion, Box, Flex, List, Text } from "@mantine/core";
import { useStore } from "../../../store";
import type { DerivedTypeItem } from "../../../store/DerivedTypesSlice";
// import { TreeRenderer } from "../../common/tree-renderer/TreeRenderer";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { DerivedTypesHeader } from "./DerivedTypesHeader";
import { useHover } from "@mantine/hooks";
import { useColors } from "../../../hooks/useColors";

const ListItem = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: () => void;
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
        },
        itemLabel: {
          height: 40,
        },
      }}
    >
      <Flex h={"100%"} align="center">
        <Text
          size="14px"
          c={isActive ? activeTextColor : hovered ? textColor : "dimmed"}
        >
          {title}
        </Text>
      </Flex>
    </List.Item>
  );
};

export const DerivedTypes = () => {
  const derivedTypes = useStore((state) => state.derivedTypes);
  const appliedDerivedType = useStore((state) => state.appliedDerivedType);
  const applyDerivedType = useStore((state) => state.applyDerivedType);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);

  const handleClick = (item: DerivedTypeItem) => {
    applyDerivedType(item);
    setSelectedTabItemId("color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <DerivedTypesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box px="lg" py="xs">
          <Accordion
            defaultValue={derivedTypes[0].id}
            variant="unstyled"
            styles={{
              label: {
                padding: "10px 0",
              },
            }}
          >
            {derivedTypes.map((item) => (
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
                      <ListItem
                        title={i.title}
                        isActive={appliedDerivedType.id === i.id}
                        onClick={() => handleClick(i)}
                      />
                    ))}
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
          {/* <TreeRenderer
            data={derivedTypes}
            activeItemId={appliedDerivedType.id}
            selectItem={(_, item) => handleClick(item as DerivedTypeItem)}
          /> */}
        </Box>
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

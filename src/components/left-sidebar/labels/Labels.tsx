import { useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { LabelsHeader } from "./LabelsHeader";
import { ActionIcon, Flex, Select, type ComboboxItem } from "@mantine/core";
import { LabelsFooter } from "./LabelsFooter";

const data = [
  { label: "Add 2D Notes", value: "add_2d_notes" },
  { label: "Add Point Label", value: "add_point_label" },
  { label: "Add Point to Point", value: "add_point_to_point" },
  { label: "Add 3 Point Arc Length", value: "add_3_point_arc_length" },
  { label: "Add 2D Plots", value: "add_2d_plots" },
];

export const Labels = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <LabelsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Flex p={"lg"} align={"center"}>
          <Select
            checkIconPosition="right"
            placeholder="Select Label"
            data={data}
            value={value ? value?.value : null}
            onChange={(_value, option) => setValue(option)}
            flex={1}
            styles={{
              input: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
            }}
          />
          <ActionIcon
            h={36}
            w={36}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            disabled={!value}
          >
            <IconArrowNarrowRight />
          </ActionIcon>
        </Flex>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <LabelsFooter />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
  // return (
  //   <Box>
  //     <DisplayModesHeader />
  //     <Divider orientation="horizontal" />
  //     {displayModesItems.map((item) => (
  //       <OneDisplayModeItem
  //         key={item.id}
  //         label={item.label}
  //         icon={item.icon}
  //         onClick={() => {}}
  //       />
  //     ))}
  //   </Box>
  // );
};

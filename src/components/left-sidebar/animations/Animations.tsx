import { useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ActionIcon, Flex, Select, type ComboboxItem } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { AnimationsHeader } from "./AnimationsHeader";
import { AnimationsFooter } from "./AnimationsFooter";

const data = [
  { label: "Linear", value: "linear" },
  { label: "Eigen Vector", value: "eigen_vector" },
];

export const Animations = () => {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AnimationsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Flex p={"lg"} align={"center"}>
          <Select
            checkIconPosition="right"
            placeholder="Select animation"
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
        <AnimationsFooter />
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

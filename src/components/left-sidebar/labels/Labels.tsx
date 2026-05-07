import { useState } from "react";
import { useNavigate } from "react-router";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
// import {
//   ActionIcon,
//   Box,
//   Flex,
//   Select,
//   type ComboboxItem,
// } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { LabelsHeader } from "./LabelsHeader";
import { LabelsFooter } from "./LabelsFooter";
import { useStore } from "../../../store";
// import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { LabelsContent } from "./LabelsContent";
// import type { LabelType } from "../../../store/LabelSlice";

// const data = [
//   { label: "Add 2D Notes", value: "add_2d_notes", route: "/2d_notes" },
//   { label: "Add Point Label", value: "add_point_label", route: "/point_label" },
//   {
//     label: "Add Point to Point",
//     value: "add_point_to_point",
//     route: "/point_to_point",
//   },
//   {
//     label: "Add 3 Point Arc Length",
//     value: "add_3_point_arc_length",
//     route: "/3_point_arc_length",
//   },
//   { label: "Add 2D Plots", value: "add_2d_plots", route: "/2d_plots" },
// ];
// const data = [
//   {
//     label: "Add 2D Notes",
//     value: "add_2d_notes",
//     // route: "/edit_labels/2d_note/new",
//   },
//   {
//     label: "Add Point Label",
//     value: "add_point_label",
//     // route: "/edit_labels/point_label",
//   },
//   {
//     label: "Add Point to Point",
//     value: "add_point_to_point",
//     // route: "/edit_labels/point_to_point",
//   },
//   {
//     label: "Add 3 Point Arc Length",
//     value: "add_3_point_arc_length",
//     // route: "/edit_labels/3_point_arc_length",
//   },
//   {
//     label: "Add 2D Plots",
//     value: "add_2d_plots",
//     // route: "/edit_labels/2d_plots",
//   },
// ];

// const routes: Record<string, string> = {
//   add_2d_notes: "/2d_notes",
//   add_point_label: "/point_label",
//   add_point_to_point: "/point_to_point",
//   add_3_point_arc_length: "/3_point_arc_length",
//   add_2d_plots: "/2d_plots",
// };
// const routes: Record<string, string> = {
//   add_2d_notes: "/edit_labels/2d_note/new",
//   add_point_label: "/edit_labels/point_label/new",
//   add_point_to_point: "/edit_labels/point_to_point/new",
//   add_3_point_arc_length: "/edit_labels/3_point_arc_length/new",
//   add_2d_plots: "/edit_labels/2d_plot/new",
// };

export const Labels = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const deleteLabel = useStore((state) => state.deleteLabel);
  const selectLabel = useStore((state) => state.selectLabel);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const [value, setValue] = useState<ComboboxItem | null>(null);

  const checkedLabels = labels.filter((label) => label.checked);

  const handleClick = (route: string | null) => {
    // if (!value || !value.value) return;
    // navigate(routes[value?.value]);
    // navigate(`${routes[value?.value]}?from=labels`);
    if (!route) return;
    navigate(`${route}?from=labels`);
  };

  // const handleAddLabel = (labelType: LabelType) => {
  //   // const newTabItem = {
  //   //   id: "edit_labels",
  //   //   label: "Edit Labels",
  //   //   icon: IconNotes,
  //   //   type: "temporary" as "temporary",
  //   // };
  //   // insertTabItem(newTabItem);
  //   navigate(`/edit_labels/${labelType}/new`);
  // };

  const handleShow = () => {};

  const handleHide = () => {};

  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedLabels.length <= 0) return;
    deleteLabel();
  };

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
        <LabelsContent
          labels={labels}
          allChecked={checkedLabels.length === labels.length}
          selectAll={() => selectAllLabels()}
          // addLabel={handleAddLabel}
          handleClick={handleClick}
          handleCheck={(_, noteId) => selectLabel(noteId)}
        />
        {/* <Flex p={"lg"} align={"center"}>
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
            onClick={handleClick}
          >
            <IconArrowNarrowRight />
          </ActionIcon>
        </Flex> */}
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <LabelsFooter
          handleShow={handleShow}
          handleHide={handleHide}
          handleInvert={handleInvert}
          handleDelete={handleDelete}
        />
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

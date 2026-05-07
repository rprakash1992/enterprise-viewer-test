import { useState } from "react";
import { useNavigate } from "react-router";
import {
  ActionIcon,
  Box,
  Flex,
  Select,
  type ComboboxItem,
} from "@mantine/core";
import { IconArrowNarrowRight, IconEye, IconPencil } from "@tabler/icons-react";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
// import type { TwoDNote } from "../../../store/2DNotesSlice";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import IconPopOut from "../../../assets/icons/IconPopout";
import type { Label } from "../../../store/LabelSlice";

const data = [
  {
    label: "Add 2D Notes",
    value: "add_2d_notes",
    // route: "/edit_labels/2d_note/new",
  },
  {
    label: "Add Point Label",
    value: "add_point_label",
    // route: "/edit_labels/point_label",
  },
  {
    label: "Add Point to Point",
    value: "add_point_to_point",
    // route: "/edit_labels/point_to_point",
  },
  {
    label: "Add 3 Point Arc Length",
    value: "add_3_point_arc_length",
    // route: "/edit_labels/3_point_arc_length",
  },
  {
    label: "Add 2D Plots",
    value: "add_2d_plots",
    // route: "/edit_labels/2d_plots",
  },
];

const routes: Record<string, string> = {
  add_2d_notes: "/edit_labels/2d_note/new",
  add_point_label: "/edit_labels/point_label/new",
  add_point_to_point: "/edit_labels/point_to_point/new",
  add_3_point_arc_length: "/edit_labels/3_point_arc_length/new",
  add_2d_plots: "/edit_labels/2d_plot/new",
};

const labelTypeToRoute: Record<string, string> = {
  twoDNote: "/2d_note",
  pointLabel: "/point_label",
  pointToPoint: "/point_to_point",
  threePointArcLength: "/3_point_arc_length",
  twoDPlot: "/2d_plot",
};

export const LabelsContent = ({
  labels,
  allChecked,
  selectAll,
  handleClick,
  handleCheck,
}: {
  labels: Label[];
  allChecked: boolean;
  selectAll: () => void;
  handleClick: (route: string | null) => void;
  handleCheck: (
    e: React.ChangeEvent<HTMLInputElement>,
    labelId: string,
  ) => void;
}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<ComboboxItem | null>(null);

  const getHoveredIcons = (note: Label) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPopOut width="13px" height="13px" />}
          withTooltip
          tooltipLabel="Popout"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() =>
            navigate(
              `/edit_labels/${labelTypeToRoute[note.labelType]}/${note?.id}?from=labels`,
            )
          }
          withTooltip
          tooltipLabel="Edit"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconEye stroke={1} />}
          withTooltip
          tooltipLabel={note.visibility ? "Hide" : "Show"}
          onClick={() => {}}
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Flex align={"center"}>
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
          onClick={() => handleClick(value ? routes[value?.value] : null)}
        >
          <IconArrowNarrowRight />
        </ActionIcon>
      </Flex>
      <Box>
        {labels.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {labels.map((label) => (
          <CheckboxListItem
            key={label.id}
            label={label.title}
            checked={label.checked}
            setChecked={(e) => handleCheck(e, label.id)}
            hoveredIcons={getHoveredIcons(label)}
          />
        ))}
      </Box>
    </Box>
  );
};

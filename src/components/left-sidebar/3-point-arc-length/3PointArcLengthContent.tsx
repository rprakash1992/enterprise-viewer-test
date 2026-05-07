import { useNavigate } from "react-router";
import { Box, Button, Flex } from "@mantine/core";
import { IconEye, IconPencil } from "@tabler/icons-react";
// import type { ThreePointArcLength } from "../../../store/3PointArcLengthSlice";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import IconPopOut from "../../../assets/icons/IconPopout";
import type { ThreePointArcLength } from "../../../store/LabelSlice";

export const ThreePointArcLengthContent = ({
  threePointArcLengths,
  allChecked,
  selectAll,
  addThreePointArcLength,
  handleCheck,
}: {
  threePointArcLengths: ThreePointArcLength[];
  allChecked: boolean;
  selectAll: () => void;
  addThreePointArcLength: () => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, arcId: string) => void;
}) => {
  const navigate = useNavigate();

  const getHoveredIcons = (arc: ThreePointArcLength) => {
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
          onClick={() => navigate(`/edit_labels/3_point_arc_length/${arc?.id}`)}
          withTooltip
          tooltipLabel="Edit"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconEye stroke={1} />}
          withTooltip
          tooltipLabel={arc.visibility ? "Hide" : "Show"}
          onClick={() => {}}
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={addThreePointArcLength} mb="lg">
        Add 3 Point Arc Length
      </Button>
      <Box>
        {threePointArcLengths.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {threePointArcLengths.map((arc) => (
          <CheckboxListItem
            key={arc.id}
            label={arc.title}
            checked={arc.checked}
            setChecked={(e) => handleCheck(e, arc.id)}
            hoveredIcons={getHoveredIcons(arc)}
          />
        ))}
      </Box>
    </Box>
  );
};

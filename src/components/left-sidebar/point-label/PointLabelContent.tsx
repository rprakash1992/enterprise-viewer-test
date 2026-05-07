import { useNavigate } from "react-router";
import { Box, Button, Flex } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
// import type { PointLabel } from "../../../store/PointLabelSlice";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import type { PointLabel } from "../../../store/LabelSlice";

export const PointLabelContent = ({
  pointLabels,
  allChecked,
  selectAll,
  addPointLabel,
  handleCheck,
}: {
  pointLabels: PointLabel[];
  allChecked: boolean;
  selectAll: () => void;
  addPointLabel: () => void;
  handleCheck: (
    e: React.ChangeEvent<HTMLInputElement>,
    labelId: string,
  ) => void;
}) => {
  const navigate = useNavigate();

  const getHoveredIcons = (label: PointLabel) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() => navigate(`/edit_labels/point_label/${label.id}`)}
          withTooltip
          tooltipLabel="Edit"
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={addPointLabel} mb="lg">
        Add Point Label
      </Button>
      <Box>
        {pointLabels.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {pointLabels.map((label) => (
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

import { useNavigate } from "react-router";
import { Box, Button, Flex } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
// import type { PointToPoint } from "../../../store/PointToPointSlice";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import type { PointToPoint } from "../../../store/LabelSlice";

export const PointToPointContent = ({
  pointToPoints,
  allChecked,
  selectAll,
  addPointToPoint,
  handleCheck,
}: {
  pointToPoints: PointToPoint[];
  allChecked: boolean;
  selectAll: () => void;
  addPointToPoint: () => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, itemId: string) => void;
}) => {
  const navigate = useNavigate();

  const getHoveredIcons = (item: PointToPoint) => {
    return (
      <Flex direction="row" align="center" gap="3px">
        <CustomActionIcon
          size="sm"
          icon={<IconPencil stroke={1} />}
          onClick={() => navigate(`/edit_labels/point_to_point/${item.id}`)}
          withTooltip
          tooltipLabel="Edit"
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={addPointToPoint} mb="lg">
        Add Point to Point
      </Button>
      <Box>
        {pointToPoints.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {pointToPoints.map((item) => (
          <CheckboxListItem
            key={item.id}
            label={item.title}
            checked={item.checked}
            setChecked={(e) => handleCheck(e, item.id)}
            hoveredIcons={getHoveredIcons(item)}
          />
        ))}
      </Box>
    </Box>
  );
};

import { useNavigate } from "react-router";
import { Box, Button, Flex } from "@mantine/core";
import { IconEye, IconPencil } from "@tabler/icons-react";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";
import { CustomActionIcon } from "../../common/custom-action-icon/CustomActionIcon";
import IconPopOut from "../../../assets/icons/IconPopout";
import type { TwoDPlot } from "../../../store/LabelSlice";
// import type { TwoDPlot } from "../../../store/2DPlotsSlice";

export const TwoDPlotContent = ({
  twoDPlots,
  allChecked,
  selectAll,
  addTwoDPlot,
  handleCheck,
}: {
  twoDPlots: TwoDPlot[];
  allChecked: boolean;
  selectAll: () => void;
  addTwoDPlot: () => void;
  handleCheck: (e: React.ChangeEvent<HTMLInputElement>, plotId: string) => void;
}) => {
  const navigate = useNavigate();

  const getHoveredIcons = (plot: TwoDPlot) => {
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
          onClick={() => navigate(`/edit_labels/2d_plot/${plot?.id}`)}
          withTooltip
          tooltipLabel="Edit"
        />
        <CustomActionIcon
          size="sm"
          icon={<IconEye stroke={1} />}
          withTooltip
          tooltipLabel={plot.visibility ? "Hide" : "Show"}
          onClick={() => {}}
        />
      </Flex>
    );
  };

  return (
    <Box>
      <Button fullWidth onClick={addTwoDPlot} mb="lg">
        Add 2D Chart
      </Button>
      <Box>
        {twoDPlots.length > 0 && (
          <CheckboxListItem
            label="Select All"
            checked={allChecked}
            setChecked={selectAll}
          />
        )}
        {twoDPlots.map((plot) => (
          <CheckboxListItem
            key={plot.id}
            label={plot.title}
            checked={plot.checked}
            setChecked={(e) => handleCheck(e, plot.id)}
            hoveredIcons={getHoveredIcons(plot)}
          />
        ))}
      </Box>
    </Box>
  );
};

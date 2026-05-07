import { Box, Button } from "@mantine/core";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { Label3DChart } from "../../../store/Label3DChartSlice";

interface Label3DChartContentProps {
  label3DCharts: Label3DChart[];
  selectedLabel3DChart: Label3DChart | null;
  addLabel3DChart: () => void;
  handleClick: (e: React.MouseEvent, chart: Label3DChart) => void;
}

export const Label3DChartContent = ({
  label3DCharts,
  selectedLabel3DChart,
  addLabel3DChart,
  handleClick,
}: Label3DChartContentProps) => {
  return (
    <Box>
      <Button mb="lg" fullWidth onClick={addLabel3DChart}>
        Add 3D Charts
      </Button>
      <Box>
        {label3DCharts.map((chart) => (
          <MenuListItem
            key={chart.id}
            label={chart.title}
            isActive={selectedLabel3DChart?.id === chart.id}
            onClick={(e) => handleClick(e, chart)}
          />
        ))}
      </Box>
    </Box>
  );
};

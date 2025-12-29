import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { Label3DChartsHeader } from "./Label3dChartsHeader";
import { useStore } from "../../../store";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { ThreeDSlide } from "../../../store/3DSlidesSlice";
import { Label3DChartsFooter } from "./Label3DChartsFooter";

export const Label3DCharts = () => {
  const label3DCharts = useStore((state) => state.label3DCharts);
  const selectedLabel3DChart = useStore((state) => state.selectedLabel3DChart);
  const addLabel3DChart = useStore((state) => state.addLabel3DChart);
  const selectLabel3DChart = useStore((state) => state.selectLabel3DChart);

  const handleClick = (_: React.MouseEvent, slide: ThreeDSlide) => {
    if (selectedLabel3DChart?.id === slide.id) {
      selectLabel3DChart(null);
    } else {
      selectLabel3DChart(slide);
    }
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <Label3DChartsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p="lg">
          <Button fullWidth onClick={addLabel3DChart}>
            Add 3D Charts
          </Button>
        </Box>
        <Box>
          {label3DCharts.map((slide) => (
            <MenuListItem
              key={slide.id}
              label={slide.title}
              isActive={selectedLabel3DChart?.id === slide.id}
              onClick={(e) => handleClick(e, slide)}
            />
          ))}
        </Box>
      </LeftSidebarLayout.Content>
      {selectedLabel3DChart?.id && (
        <LeftSidebarLayout.Footer>
          <Label3DChartsFooter />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};

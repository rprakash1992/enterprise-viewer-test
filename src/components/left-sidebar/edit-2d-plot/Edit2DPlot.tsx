import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditTwoDPlotContent } from "./Edit2DPlotContent";
import { EditTwoDPlotFooter } from "./Edit2DPlotFooter";
import { EditTwoDPlotHeader } from "./Edit2DPlotHeader";
import type { Label, TwoDPlot } from "../../../store/LabelSlice";

export const EditTwoDPlot = ({
  id,
  from,
}: {
  id: string | undefined;
  from: string | null;
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const labels = useStore((state) => state.labels);
  const twoDPlots = labels.filter((label) => label.labelType === "twoDPlot");
  const addLabel = useStore((state) => state.addLabel);
  const updateLabel = useStore((state) => state.updateLabel);
  const [newTwoDPlot, setNewTwoDPlot] = useState<Label | null>(() => {
    if (!id) return null;

    if (id === "new") {
      const newPlotId = getRandomId();
      const newPlotIndex = String(twoDPlots.length + 1);
      const bgColor = colorScheme === "dark" ? "#000" : "#fff";
      const borderColor = colorScheme === "dark" ? "#fff" : "#000";
      return {
        id: `plot-${newPlotId}`,
        title: `Plot ${newPlotIndex}`,
        xAxisTitle: "X-Axis",
        yAxisTitle: "Y-Axis",
        xAxisValue: "X Axis Value",
        yAxisValue: "Y Axis Value",
        bgColor,
        borderColor,
        bgImage: "",
        showBorder: true,
        showBg: true,
        visibility: true,
        checked: false,
        labelType: "twoDPlot",
      };
    }

    return twoDPlots.find((note) => note.id === id)!;
  });

  const updateNewTwoDPlot = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newTwoDPlot) return;

    setNewTwoDPlot({
      ...newTwoDPlot,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newTwoDPlot) return;

    if (id === "new") {
      addLabel(newTwoDPlot);
    } else {
      updateLabel(newTwoDPlot);
    }
    const navigateTo = from ?? "2d_plots";
    navigate(`/${navigateTo}`);
    // navigate("/2d_plots");
  };

  const handleCancel = () => {
    const navigateTo = from ?? "2d_plots";
    navigate(`/${navigateTo}`);
    // navigate("/2d_plots");
  };

  return !newTwoDPlot ? (
    <Box>Invalid Note Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditTwoDPlotHeader plotTitle={newTwoDPlot?.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditTwoDPlotContent
          newTwoDPlot={newTwoDPlot as TwoDPlot}
          updateNewTwoDPlot={updateNewTwoDPlot}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditTwoDPlotFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

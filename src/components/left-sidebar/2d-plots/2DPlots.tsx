import { useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { TwoDPlotsHeader } from "./2DPlotsHeader";
import { TwoDPlotsFooter } from "./2DPlotsFooter";
import { useNavigate } from "react-router";
import { TwoDPlotContent } from "./2DPlotContent";
// import IconXYPlot from "../../../assets/icons/IconXYPlot";
import type { TwoDPlot } from "../../../store/LabelSlice";

export const TwoDPlots = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const deleteLabel = useStore((state) => state.deleteLabel);
  const selectLabel = useStore((state) => state.selectLabel);
  // const insertTabItem = useStore((state) => state.insertTabItem);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const twoDPlots = labels.filter((label) => label.labelType === "twoDPlot");
  const checkedPlots = twoDPlots.filter((plot) => plot.checked);

  const handleAddTwoDPlot = () => {
    // const newTabItem = {
    //   id: "edit_labels",
    //   label: "Edit Labels",
    //   icon: IconXYPlot,
    //   type: "temporary" as "temporary",
    // };
    // insertTabItem(newTabItem);
    navigate("/edit_labels/2d_plot/new");
  };

  const handleShow = () => {};

  const handleHide = () => {};

  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedPlots.length <= 0) return;
    deleteLabel("twoDPlot");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <TwoDPlotsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <TwoDPlotContent
          twoDPlots={twoDPlots as TwoDPlot[]}
          allChecked={checkedPlots.length === twoDPlots.length}
          selectAll={() => selectAllLabels("twoDPlot")}
          addTwoDPlot={handleAddTwoDPlot}
          handleCheck={(_, plotId) => selectLabel(plotId)}
        />
      </LeftSidebarLayout.Content>
      {checkedPlots.length > 0 && (
        <LeftSidebarLayout.Footer>
          <TwoDPlotsFooter
            handleShow={handleShow}
            handleHide={handleHide}
            handleInvert={handleInvert}
            handleDelete={handleDelete}
          />
        </LeftSidebarLayout.Footer>
      )}
    </LeftSidebarLayout>
  );
};

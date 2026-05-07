import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { PointLabelHeader } from "./PointLabelHeader";
import { PointLabelFooter } from "./PointLabelFooter";
import { PointLabelContent } from "./PointLabelContent";
import type { PointLabel as PointLabelType } from "../../../store/LabelSlice";

export const PointLabel = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const selectLabel = useStore((state) => state.selectLabel);
  const deleteLabel = useStore((state) => state.deleteLabel);
  // const addPointLabel = useStore((state) => state.addPointLabel);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const pointLabels = labels.filter(
    (label) => label.labelType === "pointLabel",
  );
  const checkedLabels = pointLabels.filter((label) => label.checked);

  const handleAddPointLabel = () => {
    navigate("/edit_labels/point_label/new");
  };

  const handleShow = () => {};
  const handleHide = () => {};
  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedLabels.length <= 0) return;
    deleteLabel("pointLabel");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <PointLabelHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <PointLabelContent
          pointLabels={pointLabels as PointLabelType[]}
          allChecked={
            checkedLabels.length === pointLabels.length &&
            pointLabels.length > 0
          }
          selectAll={() => selectAllLabels("pointLabel")}
          addPointLabel={handleAddPointLabel}
          handleCheck={(_, labelId) => selectLabel(labelId)}
        />
      </LeftSidebarLayout.Content>
      {checkedLabels.length > 0 && (
        <LeftSidebarLayout.Footer>
          <PointLabelFooter
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

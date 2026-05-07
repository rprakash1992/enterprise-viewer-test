import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { PointToPointHeader } from "./PointToPointHeader";
import { PointToPointFooter } from "./PointToPointFooter";
import { PointToPointContent } from "./PointToPointContent";
import type { PointToPoint as PointToPointType } from "../../../store/LabelSlice";

export const PointToPoint = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const selectLabel = useStore((state) => state.selectLabel);
  const deleteLabel = useStore((state) => state.deleteLabel);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const pointToPoints = labels.filter(
    (label) => label.labelType === "pointToPoint",
  );
  const checkedItems = pointToPoints.filter((item) => item.checked);

  const handleAddPointToPoint = () => {
    navigate("/edit_labels/point_to_point/new");
  };

  const handleShow = () => {};
  const handleHide = () => {};
  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedItems.length <= 0) return;
    deleteLabel("pointToPoint");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <PointToPointHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <PointToPointContent
          pointToPoints={pointToPoints as PointToPointType[]}
          allChecked={
            checkedItems.length === pointToPoints.length &&
            pointToPoints.length > 0
          }
          selectAll={() => selectAllLabels("pointToPoint")}
          addPointToPoint={handleAddPointToPoint}
          handleCheck={(_, itemId) => selectLabel(itemId)}
        />
      </LeftSidebarLayout.Content>
      {checkedItems.length > 0 && (
        <LeftSidebarLayout.Footer>
          <PointToPointFooter
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

import { useState } from "react";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { ThreePointArcLengthHeader } from "./3PointArcLengthHeader";
import { ThreePointArcLengthFooter } from "./3PointArcLengthFooter";
import { useNavigate } from "react-router";
// import IconPointArcLength from "../../../assets/icons/IconPointArcLength";
import { ThreePointArcLengthContent } from "./3PointArcLengthContent";
import type { ThreePointArcLength as ThreePointArcLengthType } from "../../../store/LabelSlice";

export const ThreePointArcLength = () => {
  const navigate = useNavigate();
  const labels = useStore((state) => state.labels);
  const selectAllLabels = useStore((state) => state.selectAllLabels);
  const selectLabel = useStore((state) => state.selectLabel);
  const deleteLabel = useStore((state) => state.deleteLabel);
  // const insertTabItem = useStore((state) => state.insertTabItem);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const threePointArcLengths = labels.filter(
    (label) => label.labelType === "threePointArcLength",
  );
  const checkedArcs = threePointArcLengths.filter((arc) => arc.checked);

  const handleAddThreePointArcLength = () => {
    // const newTabItem = {
    //   id: "edit_labels",
    //   label: "Edit Labels",
    //   icon: IconPointArcLength,
    //   type: "temporary" as "temporary",
    // };
    // insertTabItem(newTabItem);
    navigate("/edit_labels/3_point_arc_length/new");
  };

  const handleShow = () => {};

  const handleHide = () => {};

  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedArcs.length <= 0) return;
    deleteLabel("threePointArcLength");
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ThreePointArcLengthHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ThreePointArcLengthContent
          threePointArcLengths={
            threePointArcLengths as ThreePointArcLengthType[]
          }
          allChecked={checkedArcs.length === threePointArcLengths.length}
          selectAll={() => selectAllLabels("threePointArcLength")}
          addThreePointArcLength={handleAddThreePointArcLength}
          handleCheck={(_, arcId) => selectLabel(arcId)}
        />
      </LeftSidebarLayout.Content>
      {checkedArcs.length > 0 && (
        <LeftSidebarLayout.Footer>
          <ThreePointArcLengthFooter
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

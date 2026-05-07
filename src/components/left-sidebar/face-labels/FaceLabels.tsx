import { useState } from "react";
import { useNavigate } from "react-router";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { FaceLabelsHeader } from "./FaceLabelsHeader";
import { FaceLabelsFooter } from "./FaceLabelsFooter";
import { FaceLabelsContent } from "./FaceLabelsContent";

export const FaceLabels = () => {
  const navigate = useNavigate();
  const faceLabels = useStore((state) => state.faceLabels);
  const selectFaceLabel = useStore((state) => state.selectFaceLabel);
  const deleteFaceLabel = useStore((state) => state.deleteFaceLabel);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearchItems] = useState<string[]>([]);

  const checkedLabels = faceLabels.filter((label) => label.checked);

  const handleAddFaceLabel = () => {
    navigate("/edit_labels/face_label/new");
  };

  const handleShow = () => {};

  const handleHide = () => {};

  const handleInvert = () => {};

  const handleDelete = () => {
    if (checkedLabels.length <= 0) return;
    deleteFaceLabel();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <FaceLabelsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          recentSearchItems={recentSearchItems}
          handleHelpClick={() => {}}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <FaceLabelsContent
          faceLabels={faceLabels}
          addFaceLabel={handleAddFaceLabel}
          handleCheck={(_, labelId) => selectFaceLabel(labelId)}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        {checkedLabels?.length > 0 && (
          <FaceLabelsFooter
            handleShow={handleShow}
            handleHide={handleHide}
            handleInvert={handleInvert}
            handleDelete={handleDelete}
          />
        )}
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

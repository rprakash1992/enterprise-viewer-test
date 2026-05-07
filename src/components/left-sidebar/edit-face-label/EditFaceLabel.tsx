import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditFaceLabelContent } from "./EditFaceLabelContent";
import { EditFaceLabelFooter } from "./EditFaceLabelFooter";
import { EditFaceLabelHeader } from "./EditFaceLabelHeader";
import type { FaceLabel } from "../../../store/FaceLabelSlice";

export const EditFaceLabel = ({ id }: { id: string | undefined }) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const faceLabels = useStore((state) => state.faceLabels);
  const addFaceLabel = useStore((state) => state.addFaceLabel);
  const updateFaceLabel = useStore((state) => state.updateFaceLabel);
  const [newFaceLabel, setNewFaceLabel] = useState<FaceLabel | null>(() => {
    if (!id) return null;

    if (id === "new") {
      const newLabelId = getRandomId();
      const newLabelIndex = String(faceLabels.length + 1);
      const bgColor = colorScheme === "dark" ? "#000" : "#fff";
      const borderColor = colorScheme === "dark" ? "#fff" : "#000";
      return {
        id: `face-label-${newLabelId}`,
        title: `Face Label ${newLabelIndex}`,
        bgColor,
        borderColor,
        bgImage: "",
        showBorder: true,
        showBg: true,
        autoFit: true,
        checked: false,
      };
    }

    return faceLabels.find((label) => label.id === id)!;
  });

  const updateNewFaceLabel = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newFaceLabel) return;

    setNewFaceLabel({
      ...newFaceLabel,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newFaceLabel) return;

    if (id === "new") {
      addFaceLabel(newFaceLabel);
    } else {
      updateFaceLabel(newFaceLabel);
    }
    navigate("/face_label");
  };

  const handleCancel = () => {
    navigate("/face_label");
  };

  return !newFaceLabel ? (
    <Box>Invalid Face Label Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditFaceLabelHeader labelTitle={newFaceLabel?.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditFaceLabelContent
          newFaceLabel={newFaceLabel}
          updateNewFaceLabel={updateNewFaceLabel}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditFaceLabelFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

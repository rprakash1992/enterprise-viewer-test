import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditPointLabelHeader } from "./EditPointLabelHeader";
import { EditPointLabelFooter } from "./EditPointLabelFooter";
import { EditPointLabelContent } from "./EditPointLabelContent";
import type { Label, PointLabel } from "../../../store/LabelSlice";

export const EditPointLabel = ({
  id,
  from,
}: {
  id: string | undefined;
  from: string | null;
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const labels = useStore((state) => state.labels);
  const pointLabels = labels.filter(
    (label) => label.labelType === "pointLabel",
  );
  const addLabel = useStore((state) => state.addLabel);
  const updateLabel = useStore((state) => state.updateLabel);
  const [newPointLabel, setNewPointLabel] = useState<Label | null>(() => {
    if (!id) return null;

    if (id === "new") {
      const newLabelId = getRandomId();
      const newLabelIndex = String(pointLabels.length + 1);
      const bgColor = colorScheme === "dark" ? "#000" : "#fff";
      const borderColor = colorScheme === "dark" ? "#fff" : "#000";
      return {
        id: `label-${newLabelId}`,
        title: `Label ${newLabelIndex}`,
        bgColor,
        borderColor,
        bgImage: "",
        showBorder: true,
        showBg: true,
        autoFit: true,
        visibility: true,
        checked: false,
        labelType: "pointLabel",
      };
    }

    return pointLabels.find((label) => label.id === id)!;
  });

  const updateNewPointLabel = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newPointLabel) return;

    setNewPointLabel({
      ...newPointLabel,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newPointLabel) return;

    if (id === "new") {
      addLabel(newPointLabel);
    } else {
      updateLabel(newPointLabel);
    }
    const navigateTo = from ?? "point_label";
    navigate(`/${navigateTo}`);
    // navigate("/point_label");
  };

  const handleCancel = () => {
    const navigateTo = from ?? "point_label";
    navigate(`/${navigateTo}`);
    // navigate("/point_label");
  };

  return !newPointLabel ? (
    <Box>Invalid Note Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditPointLabelHeader labelTitle={newPointLabel?.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditPointLabelContent
          newPointLabel={newPointLabel as PointLabel}
          updateNewPointLabel={updateNewPointLabel}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditPointLabelFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

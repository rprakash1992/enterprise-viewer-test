import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditPointToPointContent } from "./EditPointToPointContent";
import { EditPointToPointHeader } from "./EditPointToPointHeader";
import { EditPointToPointFooter } from "./EditPointToPointFooter";
import type { Label, PointToPoint } from "../../../store/LabelSlice";

export const EditPointToPoint = ({
  id,
  from,
}: {
  id: string | undefined;
  from: string | null;
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const labels = useStore((state) => state.labels);
  const pointToPoints = labels.filter(
    (label) => label.labelType === "pointToPoint",
  );
  const addLabel = useStore((state) => state.addLabel);
  const updateLabel = useStore((state) => state.updateLabel);
  const [newPointToPoint, setNewPointToPoint] = useState<Label | null>(() => {
    if (!id) return null;

    if (id === "new") {
      const newId = getRandomId();
      const newIndex = String(pointToPoints.length + 1);
      const bgColor = colorScheme === "dark" ? "#000" : "#fff";
      const borderColor = colorScheme === "dark" ? "#fff" : "#000";
      return {
        id: `point-to-point-${newId}`,
        title: `Point to Point ${newIndex}`,
        bgColor,
        borderColor,
        bgImage: "",
        showBorder: true,
        showBg: true,
        autoFit: true,
        visibility: true,
        checked: false,
        labelType: "pointToPoint",
      };
    }

    return pointToPoints.find((item) => item.id === id)!;
  });

  const updateNewPointToPoint = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newPointToPoint) return;

    setNewPointToPoint({
      ...newPointToPoint,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newPointToPoint) return;

    if (id === "new") {
      addLabel(newPointToPoint);
    } else {
      updateLabel(newPointToPoint);
    }
    const navigateTo = from ?? "point_to_point";
    navigate(`/${navigateTo}`);
    // navigate("/point_to_point");
  };

  const handleCancel = () => {
    const navigateTo = from ?? "point_to_point";
    navigate(`/${navigateTo}`);
    // navigate("/point_to_point");
  };

  return !newPointToPoint ? (
    <Box>Invalid Point to Point Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditPointToPointHeader labelTitle={newPointToPoint?.title} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditPointToPointContent
          newPointToPoint={newPointToPoint as PointToPoint}
          updateNewPointToPoint={updateNewPointToPoint}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditPointToPointFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

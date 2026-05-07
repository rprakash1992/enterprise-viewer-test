import { useState } from "react";
import { useNavigate } from "react-router";
import { Box, useMantineColorScheme } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { getRandomId } from "../../../utils/getRandomId";
import { EditThreePointArcLengthHeader } from "./Edit3PointArcLengthHeader";
import { EditThreePointArcLengthFooter } from "./Edit3PointArcLengthFooter";
import { EditThreePointArcLengthContent } from "./Edit3PointArcLengthContent";
import type { Label, ThreePointArcLength } from "../../../store/LabelSlice";

export const EditThreePointArcLength = ({
  id,
  from,
}: {
  id: string | undefined;
  from: string | null;
}) => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const labels = useStore((state) => state.labels);
  const threePointArcLengths = labels.filter(
    (label) => label.labelType === "threePointArcLength",
  );
  const addLabel = useStore((state) => state.addLabel);
  const updateLabel = useStore((state) => state.updateLabel);
  const [newThreePointArcLength, setNewThreePointArcLength] =
    useState<Label | null>(() => {
      if (!id) return null;

      if (id === "new") {
        const newArcId = getRandomId();
        const newArcIndex = String(threePointArcLengths.length + 1);
        const bgColor = colorScheme === "dark" ? "#000" : "#fff";
        const borderColor = colorScheme === "dark" ? "#fff" : "#000";
        return {
          id: `arc-${newArcId}`,
          title: `Arc ${newArcIndex}`,
          bgColor,
          borderColor,
          bgImage: "",
          showBorder: true,
          showBg: true,
          autoFit: true,
          visibility: true,
          checked: false,
          labelType: "threePointArcLength",
        };
      }

      return threePointArcLengths.find((arc) => arc.id === id)!;
    });

  const updateNewThreePointArcLength = (
    fieldName: string,
    fieldValue: string | boolean,
  ) => {
    if (!newThreePointArcLength) return;

    setNewThreePointArcLength({
      ...newThreePointArcLength,
      [fieldName]: fieldValue,
    });
  };

  const handleSave = () => {
    if (!newThreePointArcLength) return;

    if (id === "new") {
      addLabel(newThreePointArcLength);
    } else {
      updateLabel(newThreePointArcLength);
    }
    const navigateTo = from ?? "3_point_arc_length";
    navigate(`/${navigateTo}`);
    // navigate("/3_point_arc_length");
  };

  const handleCancel = () => {
    const navigateTo = from ?? "3_point_arc_length";
    navigate(`/${navigateTo}`);
    // navigate("/3_point_arc_length");
  };

  return !newThreePointArcLength ? (
    <Box>Invalid Arc Id</Box>
  ) : (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <EditThreePointArcLengthHeader
          arcTitle={newThreePointArcLength?.title}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <EditThreePointArcLengthContent
          newThreePointArcLength={newThreePointArcLength as ThreePointArcLength}
          updateNewThreePointArcLength={updateNewThreePointArcLength}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <EditThreePointArcLengthFooter
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

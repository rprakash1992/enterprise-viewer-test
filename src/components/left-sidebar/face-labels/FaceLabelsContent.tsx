import { Box, Button } from "@mantine/core";
import type { FaceLabel } from "../../../store/FaceLabelSlice";
import { CheckboxListItem } from "../../common/checkbox-list-item/CheckboxListItem";

interface FaceLabelsContentProps {
  faceLabels: FaceLabel[];
  addFaceLabel: () => void;
  handleCheck: (
    e: React.ChangeEvent<HTMLInputElement>,
    labelId: string,
  ) => void;
}

export const FaceLabelsContent = ({
  faceLabels,
  addFaceLabel,
  handleCheck,
}: FaceLabelsContentProps) => {
  return (
    <Box>
      <Button fullWidth onClick={addFaceLabel} mb="lg">
        Add Face Label
      </Button>
      <Box>
        {faceLabels.map((faceLabel) => (
          <CheckboxListItem
            key={faceLabel.id}
            label={faceLabel.title}
            checked={faceLabel.checked}
            setChecked={(e) => handleCheck(e, faceLabel.id)}
          />
        ))}
      </Box>
    </Box>
  );
};

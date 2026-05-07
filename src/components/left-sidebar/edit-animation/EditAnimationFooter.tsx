import { Box } from "@mantine/core";
import { SaveCancelBtns } from "../../common/save-cancel-btns/SaveCancelBtns";

interface EditAnimationFooterProps {
  handleSave: () => void;
  handleCancel: () => void;
}

export const EditAnimationFooter = ({
  handleSave,
  handleCancel,
}: EditAnimationFooterProps) => {
  return (
    <Box p="lg">
      <SaveCancelBtns handleSave={handleSave} handleCancel={handleCancel} />
    </Box>
  );
};

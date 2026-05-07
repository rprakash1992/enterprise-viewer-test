import { Button, Flex } from "@mantine/core";

export const SaveCancelBtns = ({
  handleSave,
  handleCancel,
}: {
  handleSave: () => void;
  handleCancel: () => void;
}) => {
  return (
    <Flex gap="xs">
      <Button fullWidth onClick={handleSave}>
        Apply
      </Button>
      <Button fullWidth variant="default" onClick={handleCancel}>
        Cancel
      </Button>
    </Flex>
  );
};

import { Button, Flex } from "@mantine/core";

export const EditFaceLabelFooter = ({
  handleSave,
  handleCancel,
}: {
  handleSave: (e: React.MouseEvent) => void;
  handleCancel: (e: React.MouseEvent) => void;
}) => (
  <Flex p="lg" gap="xs">
    <Button fullWidth onClick={handleSave}>
      Apply
    </Button>
    <Button fullWidth variant="default" onClick={handleCancel}>
      Cancel
    </Button>
  </Flex>
);

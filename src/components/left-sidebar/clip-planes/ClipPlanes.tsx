import { Box, Button } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { ClipPlanesHeader } from "./ClipPlanesHeader";
import { ClipPlanesFooter } from "./ClipPlanesFooter";

export const ClipPlanes = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ClipPlanesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box p={"lg"}>
          <Button fullWidth>Add Clip Plane</Button>
        </Box>
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <ClipPlanesFooter />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

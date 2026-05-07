import { Box } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { GeometryTransformHeader } from "./GeometryTransformHeader";
import { useStore } from "../../../store";

export const GeometryTransform = () => {
  const geometryTransformAppliedTo = useStore(
    (state) => state.geometryTransformAppliedTo,
  );
  const setGeometryTransformAppliedTo = useStore(
    (state) => state.setGeometryTransformAppliedTo,
  );

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <GeometryTransformHeader
          geometryTransformAppliedTo={geometryTransformAppliedTo}
          setGeometryTransformAppliedTo={setGeometryTransformAppliedTo}
        />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <Box />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

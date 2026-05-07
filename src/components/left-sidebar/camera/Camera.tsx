import LeftSidebarLayout from "../LeftSidebarLayout";
import { useStore } from "../../../store";
import { CameraHeader } from "./CameraHeader";
import { CameraContent } from "./CameraContent";

export const Camera = () => {
  const cameraAngles = useStore((state) => state.cameraAngles);
  const selectedCameraAngle = useStore((state) => state.selectedCameraAngle);
  const selectedCameraType = useStore((state) => state.selectedCameraType);
  const selectCameraAngle = useStore((state) => state.selectCameraAngle);
  const selectCameraType = useStore((state) => state.selectCameraType);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <CameraHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <CameraContent
          selectedCameraType={selectedCameraType}
          selectedCameraAngle={selectedCameraAngle}
          cameraAngles={cameraAngles}
          selectCameraType={selectCameraType}
          selectCameraAngle={selectCameraAngle}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

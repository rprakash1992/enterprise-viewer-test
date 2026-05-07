import LeftSidebarLayout from "../LeftSidebarLayout";
import { ClipPlanesHeader } from "./ClipPlanesHeader";
import { ClipPlanesFooter } from "./ClipPlanesFooter";
import { useStore } from "../../../store";
import { ClipPlanesContent } from "./ClipPlanesContent";

export const ClipPlanes = () => {
  const clipPlanes = useStore((state) => state.clipPlanes);
  const addClipPlane = useStore((state) => state.addClipPlane);
  const setClipPlaneApplied = useStore((state) => state.setClipPlaneApplied);

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ClipPlanesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <ClipPlanesContent
          clipPlanes={clipPlanes}
          addClipPlane={addClipPlane}
          setClipPlaneApplied={setClipPlaneApplied}
        />
      </LeftSidebarLayout.Content>
      <LeftSidebarLayout.Footer>
        <ClipPlanesFooter />
      </LeftSidebarLayout.Footer>
    </LeftSidebarLayout>
  );
};

import { Drawer } from "@mantine/core";
import { useStore } from "../../store";
import { AllMenuItems } from "./menu-items/AllMenuItems";
import { DisplayModes } from "./display-modes/DisplayModes";
import { ColorMapEdit } from "./color-map-edit/ColorMapEdit";
import { Labels } from "./labels/Labels";
import { ClipPlanes } from "./clip-planes/ClipPlanes";
import { NAV_TAB_WIDTH } from "../../constants";
import { AssemblyTree } from "./assembly-tree/AssemblyTree";
import { ThreeDSlides } from "./3d-slides/3DSlides";
import { Guides } from "./guides/Guides";
import { About } from "./about/About";
import { Variable } from "./variable/Variable";
import { Steps } from "./steps/Steps";
import { DerivedTypes } from "./derived-types/DerivedTypes";
import { TwoDNotes } from "./2d-notes/2DNotes";
import { TwoDPlots } from "./2d-plots/2DPlots";
import { ThreePointArcLength } from "./3-point-arc-length/3PointArcLength";
import { Animations } from "./animations/Animations";
import { AxisTriad } from "./axis-triad/AxisTriad";
import { Background } from "./background/Background";
import { Camera } from "./camera/Camera";
import { ColorTheme } from "./color-theme/ColorTheme";
import { FaceLabels } from "./face-labels/FaceLabels";
import { History } from "./history/History";
import { Label3DCharts } from "./label-3d-charts/Label3dCharts";
import { VectorAnimation } from "./vector-animation/VectorAnimation";
import { Transient } from "./transient/Transient";
import { ToolbarPosition } from "./toolbar-position/ToolbarPosition";
import { Toolbars } from "./toolbars/Toolbars";
import { ToolbarItems } from "./toolbar-items/ToolbarItems";
import { PointToPoint } from "./point-to-point/PointToPoint";
import { PointLabel } from "./point-label/PointLabel";
import { MouseControls } from "./mouse-controls/MouseControls";
import { LinearAnimation } from "./linear-animation/LinearAnimation";

export const LeftSidebar = () => {
  const selectedTabItemId = useStore((state) => state.selectedTabItemId);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);

  return (
    <Drawer
      withCloseButton={false}
      opened={!!selectedTabItemId}
      onClose={() => setSelectedTabItemId(null)}
      styles={{
        body: {
          padding: 0,
        },
        inner: {
          marginLeft: NAV_TAB_WIDTH,
        },
        overlay: {
          marginLeft: NAV_TAB_WIDTH,
        },
        content: {
          overflowY: "unset",
        },
      }}
      size="xs"
      transitionProps={{
        transition: "fade-right",
      }}
    >
      {selectedTabItemId === "menus" && <AllMenuItems />}
      {selectedTabItemId === "display_modes" && <DisplayModes />}
      {selectedTabItemId === "color_map_edit" && <ColorMapEdit />}
      {selectedTabItemId === "labels" && <Labels />}
      {selectedTabItemId === "clip_planes_list" && <ClipPlanes />}
      {selectedTabItemId === "assembly_tree" && <AssemblyTree />}
      {selectedTabItemId === "3d_slides" && <ThreeDSlides />}
      {selectedTabItemId === "guides" && <Guides />}
      {selectedTabItemId === "about" && <About />}
      {selectedTabItemId === "variable" && <Variable />}
      {selectedTabItemId === "steps_and_subcase" && <Steps />}
      {selectedTabItemId === "derived_types" && <DerivedTypes />}
      {selectedTabItemId === "2d_notes" && <TwoDNotes />}
      {selectedTabItemId === "2d_plots" && <TwoDPlots />}
      {selectedTabItemId === "3_point_arc_length" && <ThreePointArcLength />}
      {selectedTabItemId === "animations" && <Animations />}
      {selectedTabItemId === "axis_triad" && <AxisTriad />}
      {selectedTabItemId === "background" && <Background />}
      {selectedTabItemId === "camera" && <Camera />}
      {selectedTabItemId === "color_theme" && <ColorTheme />}
      {selectedTabItemId === "face_label" && <FaceLabels />}
      {selectedTabItemId === "history" && <History />}
      {selectedTabItemId === "label_3d_chart" && <Label3DCharts />}
      {selectedTabItemId === "linear_animation" && <LinearAnimation />}
      {selectedTabItemId === "mouse_controls" && <MouseControls />}
      {selectedTabItemId === "point_label" && <PointLabel />}
      {selectedTabItemId === "point_to_point" && <PointToPoint />}
      {selectedTabItemId === "toolbar_items" && <ToolbarItems />}
      {selectedTabItemId === "toolbar_position" && <ToolbarPosition />}
      {selectedTabItemId === "toolbars" && <Toolbars />}
      {selectedTabItemId === "transient" && <Transient />}
      {selectedTabItemId === "vector_animation" && <VectorAnimation />}
    </Drawer>
  );
};

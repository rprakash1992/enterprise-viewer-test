import { useLocation, useNavigate } from "react-router";
import { Drawer } from "@mantine/core";
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
import { EigenVectorAnimations } from "./eigen-vector-animations/EigenVectorAnimations";
import { Transient } from "./transient/Transient";
import { ToolbarPosition } from "./toolbar-position/ToolbarPosition";
import { Toolbars } from "./toolbars/Toolbars";
import { ToolbarItems } from "./toolbar-items/ToolbarItems";
import { PointToPoint } from "./point-to-point/PointToPoint";
import { PointLabel } from "./point-label/PointLabel";
import { MouseControls } from "./mouse-controls/MouseControls";
import { LinearAnimations } from "./linear-animations/LinearAnimations";
// import { EditTwoDPlot } from "./edit-2d-plot/Edit2DPlot";
import { EditAnimation } from "./edit-animation/EditAnimation";
import { LabelEdit } from "./label-edit/LabelEdit";
import { AverageOptions } from "./average-options/AverageOptions";
import { ColorPalette } from "./color-palette/ColorPalette";
import { Geometry } from "./geometry/Geometry";
import { GeometryTransform } from "./geometry-transform/GeometryTransform";

export const LeftSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // const matchEditTwoDPlot = useMatch("/edit_2d_plot/:param");
  // const matchViewAddAnimation = useMatch("/view_add_animation/:param");
  const pathnameArr = pathname.split("/");

  const basePath = "/" + pathnameArr[1];

  return (
    <Drawer
      withCloseButton={false}
      opened={!!pathname.slice(1)}
      onClose={() => navigate("/")}
      styles={{
        body: {
          padding: 0,
          maxWidth: 320,
          position: "relative",
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
      {pathname === "/menus" && <AllMenuItems />}
      {pathname === "/display_modes" && <DisplayModes />}
      {pathname === "/color_map_edit" && <ColorMapEdit />}
      {pathname === "/labels" && <Labels />}
      {basePath === "/edit_labels" && <LabelEdit />}
      {pathname === "/clip_planes_list" && <ClipPlanes />}
      {pathname === "/assembly_tree" && <AssemblyTree />}
      {pathname === "/3d_slides" && <ThreeDSlides />}
      {pathname === "/guides" && <Guides />}
      {pathname === "/about" && <About />}
      {pathname === "/variable" && <Variable />}
      {pathname === "/steps_and_subcase" && <Steps />}
      {pathname === "/derived_types" && <DerivedTypes />}
      {pathname === "/2d_notes" && <TwoDNotes />}
      {pathname === "/2d_plots" && <TwoDPlots />}
      {/* {matchEditTwoDPlot && <EditTwoDPlot />} */}
      {pathname === "/3_point_arc_length" && <ThreePointArcLength />}
      {pathname === "/animations" && <Animations />}
      {/* {matchViewAddAnimation && <EditAnimation />} */}
      {basePath === "/edit_animation" && <EditAnimation />}
      {pathname === "/axis_triad" && <AxisTriad />}
      {pathname === "/background" && <Background />}
      {pathname === "/camera" && <Camera />}
      {pathname === "/color_theme" && <ColorTheme />}
      {pathname === "/face_label" && <FaceLabels />}
      {pathname === "/history" && <History />}
      {pathname === "/label_3d_chart" && <Label3DCharts />}
      {pathname === "/linear_animations" && <LinearAnimations />}
      {pathname === "/mouse_controls" && <MouseControls />}
      {pathname === "/point_label" && <PointLabel />}
      {pathname === "/point_to_point" && <PointToPoint />}
      {pathname === "/toolbar_items" && <ToolbarItems />}
      {pathname === "/toolbar_position" && <ToolbarPosition />}
      {pathname === "/toolbars" && <Toolbars />}
      {pathname === "/transient" && <Transient />}
      {pathname === "/eigen_vector_animations" && <EigenVectorAnimations />}
      {pathname === "/average_options" && <AverageOptions />}
      {pathname === "/color_palette" && <ColorPalette />}
      {pathname === "/geometry" && <Geometry />}
      {pathname === "/geometry_transform" && <GeometryTransform />}
    </Drawer>
  );
};

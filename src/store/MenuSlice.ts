import type { StateCreator } from "zustand";
import IconAssemblyTree from "../assets/icons/IconAssemblyTree";
import IconAbout from "../assets/icons/IconAbout";
import IconNotes from "../assets/icons/IconNotes";
import Icon3DCharts from "../assets/icons/Icon3DCharts";
import IconPointArcLength from "../assets/icons/IconPointArcLength";
import IconSlides from "../assets/icons/IconSlides";
import IconAnimation from "../assets/icons/IconAnimation";
import IconAxisTriad from "../assets/icons/IconAxisTriad";
import IconBackground from "../assets/icons/IconBackground";
import IconCamera from "../assets/icons/IconCamera";
import IconColorMapEdit from "../assets/icons/IconColorMapEdit";
import IconClipPlaneList from "../assets/icons/IconClipPlaneList";
import IconColorTheme from "../assets/icons/IconColorTheme";
import IconDerivedTypes from "../assets/icons/IconerivedTypes";
import IconDisplayModes from "../assets/icons/IconDisplayModes";
import IconFaceLabel from "../assets/icons/IconFaceLabel";
import IconGeometry from "../assets/icons/IconGeometry";
import IconGeometryTransform from "../assets/icons/IconGeometryTransform";
import IconGuides from "../assets/icons/IconGuides";
import { IconHistory, IconPoint } from "@tabler/icons-react";
import IconLabels from "../assets/icons/IconLabels";
import IconLegendSettings from "../assets/icons/IconLegendSettings";
import IconLinearAnimation from "../assets/icons/IconLinearAnimation";
import IconMouseControls from "../assets/icons/IconMouseControls";
import IconPointLabel from "../assets/icons/IconPointLabel";
import IconPointToPoint from "../assets/icons/IconPointToPoint";
import IconClipPlanes from "../assets/icons/IconClipPlanes";
import IconClipPlaneSetting from "../assets/icons/IconClipPlaneSetting";
import IconClipPlaneTransform from "../assets/icons/IconClipPlaneTransform";
import IconStepsAndSubcase from "../assets/icons/IconStepsAndSubcase";
import IconEigen from "../assets/icons/IconEigen";
import IconField from "../assets/icons/IconField";
import IconValueSettings from "../assets/icons/IconValueSettings";
import IconTransient from "../assets/icons/IconTransient";
import IconToolbar from "../assets/icons/IconToolbar";
import IconToolbarPosition from "../assets/icons/IconToolbarPosition";
import IconToolbarItems from "../assets/icons/IconToolbarItems";

export interface MenuItem {
  id: string;
  label: string;
  icon: any;
  isDisabled?: boolean;
}

const allMenuItems: MenuItem[] = [
  {
    id: "2d_notes",
    label: "2D Notes",
    icon: IconNotes,
  },
  {
    id: "2d_plots",
    label: "2D Plots",
    icon: IconAbout,
  },
  {
    id: "3_point_arc_length",
    label: "3 Point Arc Length",
    icon: IconPointArcLength,
  },
  {
    id: "3d_slides",
    label: "3D Slides",
    icon: IconSlides,
  },
  {
    id: "about",
    label: "About",
    icon: IconAbout,
  },
  {
    id: "animations",
    label: "Animations",
    icon: IconAnimation,
  },
  {
    id: "assembly_tree",
    label: "Assembly Tree",
    icon: IconAssemblyTree,
  },
  {
    id: "average_options",
    label: "Average Options",
    icon: IconAbout,
  },
  {
    id: "axis_triad",
    label: "Axis Triad",
    icon: IconAxisTriad,
  },
  {
    id: "background",
    label: "Background",
    icon: IconBackground,
  },
  {
    id: "camera",
    label: "Camera",
    icon: IconCamera,
  },
  {
    id: "chatbot",
    label: "Chatbot",
    icon: IconPoint,
    isDisabled: true,
  },
  {
    id: "clip_planes_list",
    label: "Clip Planes List",
    icon: IconClipPlaneList,
  },
  {
    id: "color_map_edit",
    label: "Color Map Edit",
    icon: IconColorMapEdit,
  },
  {
    id: "color_map_list",
    label: "Color Map List",
    icon: IconAbout,
  },
  {
    id: "color_palette",
    label: "Color Palette",
    icon: IconAbout,
  },
  {
    id: "color_palette_edit",
    label: "Color Palette Edit",
    icon: IconAbout,
  },
  {
    id: "color_theme",
    label: "Color Theme",
    icon: IconColorTheme,
  },
  {
    id: "derived_types",
    label: "Derived Type",
    icon: IconDerivedTypes,
  },
  {
    id: "display_modes",
    label: "Display Modes",
    icon: IconDisplayModes,
  },
  {
    id: "face_label",
    label: "Face Label",
    icon: IconFaceLabel,
  },
  {
    id: "geometry",
    label: "Geometry",
    icon: IconGeometry,
  },
  {
    id: "geometry_transform",
    label: "Geometry Transform",
    icon: IconGeometryTransform,
  },
  {
    id: "guides",
    label: "Guides",
    icon: IconGuides,
  },
  {
    id: "history",
    label: "History",
    icon: IconHistory,
  },
  {
    id: "label_3d_chart",
    label: "Label 3D Chart",
    icon: Icon3DCharts,
  },
  {
    id: "label_template",
    label: "Label Template",
    icon: IconPoint,
    isDisabled: true,
  },
  {
    id: "labels",
    label: "Labels",
    icon: IconLabels,
  },
  {
    id: "legend_setting",
    label: "Legend Setting",
    icon: IconLegendSettings,
  },
  {
    id: "linear_animation",
    label: "Linear Animation",
    icon: IconLinearAnimation,
  },
  {
    id: "mouse_controls",
    label: "Mouse Controls",
    icon: IconMouseControls,
  },
  {
    id: "parts_list",
    label: "Parts List",
    icon: IconAssemblyTree,
  },
  {
    id: "point_label",
    label: "Point Label",
    icon: IconPointLabel,
  },
  {
    id: "point_to_point",
    label: "Point to Point",
    icon: IconPointToPoint,
  },
  {
    id: "section_list",
    label: "Section List",
    icon: IconClipPlanes,
    isDisabled: true,
  },
  {
    id: "section_settings",
    label: "Section Settings",
    icon: IconClipPlaneSetting,
    isDisabled: true,
  },
  {
    id: "section_transform",
    label: "Section Transform",
    icon: IconClipPlaneTransform,
    isDisabled: true,
  },
  {
    id: "simple_chat_bot",
    label: "Simple Chat Bot",
    icon: IconLabels,
  },
  {
    id: "steps_and_subcase",
    label: "Steps and Subcase",
    icon: IconStepsAndSubcase,
  },
  {
    id: "toolbar_items",
    label: "Tool Bar Items",
    icon: IconToolbarItems,
  },
  {
    id: "toolbar_position",
    label: "Tool Bar Position",
    icon: IconToolbarPosition,
  },
  {
    id: "toolbars",
    label: "Toolbars",
    icon: IconToolbar,
  },
  {
    id: "transient",
    label: "Transient",
    icon: IconTransient,
  },
  {
    id: "value-setting",
    label: "Value Setting",
    icon: IconValueSettings,
  },
  {
    id: "variable",
    label: "Variable",
    icon: IconField,
  },
  {
    id: "vector_animation",
    label: "Vector Animation",
    icon: IconEigen,
  },
];

export interface MenuSlice {
  top: number;
  menuItems: MenuItem[];

  setTop: (val: number) => void;
  setMenuItems: (menuItems: MenuItem[]) => void;
}

export const createMenuSlice: StateCreator<
  MenuSlice,
  [["zustand/devtools", never]],
  [],
  MenuSlice
> = (set) => {
  return {
    top: 0,
    menuItems: allMenuItems,

    setTop: (val) => {
      set({ top: val });
    },
    setMenuItems: (val) => {
      set({ menuItems: val });
    },
  };
};

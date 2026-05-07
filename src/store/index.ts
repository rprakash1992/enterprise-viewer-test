import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type TabSlice, createTabSlice } from "./TabsSlice";
import { type MenuSlice, createMenuSlice } from "./MenuSlice";
import {
  type DisplayModesSlice,
  createDisplayModesSlice,
} from "./DisplayModesSlice";
import {
  type AssemblyTreeSlice,
  createAssemblyTreeSlice,
} from "./AssemblyTreeSlice";
import {
  createThreeDSlidesSlice,
  type ThreeDSlidesSlice,
} from "./3DSlidesSlice";
import { createGuidesSlice, type GuidesSlice } from "./GuidesSlice";
import { createVariableSlice, type VariableSlice } from "./VariableSlice";
import { createStepsSlice, type StepsSlice } from "./StepsSlice";
import {
  createDerivedTypesSlice,
  type DerivedTypesSlice,
} from "./DerivedTypesSlice";
import { createTwoDNotesSlice, type TwoDNotesSlice } from "./2DNotesSlice";
import { createTwoDPlotsSlice, type TwoDPlotsSlice } from "./2DPlotsSlice";
import {
  createThreePointArcLengthSlice,
  type ThreePointArcLengthSlice,
} from "./3PointArcLengthSlice";
import {
  createAxisTriadPositionSlice,
  type AxisTriadPositionSlice,
} from "./AxisTriadSlice";
import { createBackgroundSlice, type BackgroundSlice } from "./BackgroundSlice";
import { createCameraSlice, type CameraSlice } from "./CameraSlice";
import { createFaceLabelSlice, type FaceLabelSlice } from "./FaceLabelSlice";
import { createHistorySlice, type HistorySlice } from "./HistorySlice";
import {
  createLabel3DChartSlice,
  type Label3DChartSlice,
} from "./Label3DChartSlice";
import {
  createToolbarPositionSlice,
  type ToolbarPositionSlice,
} from "./ToolbarPositionSlice";
import { createToolbarSlice, type ToolbarsSlice } from "./ToolbarsSlice";
import {
  createToolbarItemsSlice,
  type ToolbarItemsSlice,
} from "./ToolbarItemsSlice";
import {
  createPointToPointSlice,
  type PointToPointSlice,
} from "./PointToPointSlice";
import { createPointLabelSlice, type PointLabelSlice } from "./PointLabelSlice";
import {
  createMouseControlSlice,
  type MouseControlSlice,
} from "./MouseControlsSlice";
import { createAnimationsSlice, type AnimationsSlice } from "./AnimationsSlice";
import { createClipPlaneSlice, type ClipPlaneSlice } from "./ClipPlaneSlice";
import {
  createColorPaletteSlice,
  type ColorPaletteSlice,
} from "./ColorPaletteSlice";
import {
  createGeometryTransformSlice,
  type GeometryTransformSlice,
} from "./GeometryTransformSlice";
import { createLabelSlice, type LabelSlice } from "./LabelSlice";

export const useStore = create<
  TabSlice &
    MenuSlice &
    DisplayModesSlice &
    AssemblyTreeSlice &
    ThreeDSlidesSlice &
    GuidesSlice &
    VariableSlice &
    StepsSlice &
    DerivedTypesSlice &
    TwoDNotesSlice &
    TwoDPlotsSlice &
    ThreePointArcLengthSlice &
    AxisTriadPositionSlice &
    BackgroundSlice &
    CameraSlice &
    FaceLabelSlice &
    HistorySlice &
    Label3DChartSlice &
    ToolbarPositionSlice &
    ToolbarsSlice &
    ToolbarItemsSlice &
    PointToPointSlice &
    PointLabelSlice &
    MouseControlSlice &
    AnimationsSlice &
    ClipPlaneSlice &
    ColorPaletteSlice &
    GeometryTransformSlice &
    LabelSlice
>()(
  devtools((...a) => ({
    ...createTabSlice(...a),
    ...createMenuSlice(...a),
    ...createDisplayModesSlice(...a),
    ...createAssemblyTreeSlice(...a),
    ...createThreeDSlidesSlice(...a),
    ...createGuidesSlice(...a),
    ...createVariableSlice(...a),
    ...createStepsSlice(...a),
    ...createDerivedTypesSlice(...a),
    ...createTwoDNotesSlice(...a),
    ...createTwoDPlotsSlice(...a),
    ...createThreePointArcLengthSlice(...a),
    ...createAxisTriadPositionSlice(...a),
    ...createBackgroundSlice(...a),
    ...createCameraSlice(...a),
    ...createFaceLabelSlice(...a),
    ...createHistorySlice(...a),
    ...createLabel3DChartSlice(...a),
    ...createToolbarPositionSlice(...a),
    ...createToolbarSlice(...a),
    ...createToolbarItemsSlice(...a),
    ...createPointToPointSlice(...a),
    ...createPointLabelSlice(...a),
    ...createMouseControlSlice(...a),
    ...createAnimationsSlice(...a),
    ...createClipPlaneSlice(...a),
    ...createColorPaletteSlice(...a),
    ...createGeometryTransformSlice(...a),
    ...createLabelSlice(...a),
  })),
);

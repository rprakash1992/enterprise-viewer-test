import { BrowserRouter, Route, Routes } from "react-router";
import { Box } from "@mantine/core";
import { AppLayout } from "../components/app-layout/AppLayout";

const PageNotFound = () => {
  return <Box>Page not found</Box>;
};

const Router = () => {
  return (
    <BrowserRouter basename="/enterpriseviewer">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/menus" element={<></>} />
          <Route path="/display_modes" element={<></>} />
          <Route path="/color_map_edit" element={<></>} />
          <Route path="/labels" element={<></>} />
          <Route path="/edit_labels/:labelType/:id" element={<></>} />
          <Route path="/clip_planes_list" element={<></>} />
          <Route path="/assembly_tree" element={<></>} />
          <Route path="/3d_slides" element={<></>} />
          <Route path="/guides" element={<></>} />
          <Route path="/about" element={<></>} />
          <Route path="/variable" element={<></>} />
          <Route path="/steps_and_subcase" element={<></>} />
          <Route path="/derived_types" element={<></>} />
          <Route path="/2d_notes" element={<></>} />
          <Route path="/2d_plots" element={<></>} />
          {/* <Route path="/edit_2d_plot/:id" element={<></>} /> */}
          <Route path="/3_point_arc_length" element={<></>} />
          {/* <Route path="/edit_3_point_arc_length/:id" element={<></>} /> */}
          <Route path="/animations" element={<></>} />
          <Route path="/edit_animation/:id" element={<></>} />
          {/* <Route path="/view_add_animation/:id" element={<></>} /> */}
          <Route path="/axis_triad" element={<></>} />
          <Route path="/background" element={<></>} />
          <Route path="/camera" element={<></>} />
          <Route path="/color_theme" element={<></>} />
          <Route path="/face_label" element={<></>} />
          <Route path="/history" element={<></>} />
          <Route path="/label_3d_chart" element={<></>} />
          <Route path="/linear_animations" element={<></>} />
          <Route path="/mouse_controls" element={<></>} />
          <Route path="/point_label" element={<></>} />
          <Route path="/point_to_point" element={<></>} />
          <Route path="/toolbar_items" element={<></>} />
          <Route path="/toolbar_position" element={<></>} />
          <Route path="/toolbars" element={<></>} />
          <Route path="/transient" element={<></>} />
          <Route path="/eigen_vector_animations" element={<></>} />
          <Route path="/average_options" element={<></>} />
          <Route path="/color_palette" element={<></>} />
          <Route path="/geometry" element={<></>} />
          <Route path="/geometry_transform" element={<></>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

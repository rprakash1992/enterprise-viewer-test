import { BrowserRouter, Route, Routes } from "react-router";
import { Box } from "@mantine/core";
import { AppLayout } from "../components/app-layout/AppLayout";

const PageNotFound = () => {
  return <Box>Page not found</Box>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

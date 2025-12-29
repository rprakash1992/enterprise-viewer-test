import { Box, Text } from "@mantine/core";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { AboutHeader } from "./AboutHeader";
import { Link } from "react-router";

export const About = () => {
  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <AboutHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <Box px="lg" py="xs">
          <Text size="14px" mb={5}>
            VCollab Enterprise
          </Text>
          <Text size="10px" mb={5}>
            Version: Alpha v1.0.0
          </Text>
          <Text size="10px" mb={20}>
            2023 VCollab. All rights reserved
          </Text>
          <Link to={"/terms"}>
            <Text size="12px" mb="5px">Terms of use</Text>
          </Link>
          <Link to={"/privacy-statement"}>
            <Text size="12px">Privacy Statement</Text>
          </Link>
        </Box>
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

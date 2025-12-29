import { Box, Divider, Flex } from "@mantine/core";

const LeftSidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction={"column"} w={"100%"} h={"100vh"}>
      {children}
    </Flex>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Box>{children}</Box>
      <Divider orientation="horizontal" />
    </Box>
  );
};

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box flex={1} style={{ overflowY: "auto" }}>
      {children}
    </Box>
  );
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <Box>{children}</Box>;
};

LeftSidebarLayout.Header = Header;
LeftSidebarLayout.Content = Content;
LeftSidebarLayout.Footer = Footer;

export default LeftSidebarLayout;

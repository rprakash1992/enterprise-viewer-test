import { Text } from "@mantine/core";

export const LabelText = ({
  text,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
}: {
  text: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  pt?: string;
  pb?: string;
  pl?: string;
  pr?: string;
}) => {
  return (
    <Text
      size="14px"
      fw={500}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
    >
      {text}
    </Text>
  );
};

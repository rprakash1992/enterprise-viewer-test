import { useParams, useSearchParams } from "react-router";
import { Box, Flex, Text } from "@mantine/core";
import { EditTwoDNote } from "../edit-2d-note/Edit2DNote";
import { EditTwoDPlot } from "../edit-2d-plot/Edit2DPlot";
import { EditThreePointArcLength } from "../edit-3-point-arc-length/Edit3PointArcLength";
import { EditFaceLabel } from "../edit-face-label/EditFaceLabel";
import { EditPointLabel } from "../edit-point-label/EditPointLabel";
import { EditPointToPoint } from "../edit-point-to-point/EditPointToPoint";

export const LabelEdit = () => {
  const { labelType, id } = useParams();
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from");

  const getComponent = (type: string | undefined) => {
    switch (type) {
      case "2d_note":
        return <EditTwoDNote id={id} from={from} />;
      case "2d_plot":
        return <EditTwoDPlot id={id} from={from} />;
      case "3_point_arc_length":
        return <EditThreePointArcLength id={id} from={from} />;
      case "point_label":
        return <EditPointLabel id={id} from={from} />;
      case "point_to_point":
        return <EditPointToPoint id={id} from={from} />;
      case "face_label":
        return <EditFaceLabel id={id} />;
      default:
        return (
          <Flex justify="center" align="center" h="100vh">
            <Text size="14px" c="dimmed">
              Unknown Label Type
            </Text>
          </Flex>
        );
    }
  };

  return <Box>{getComponent(labelType)}</Box>;
};

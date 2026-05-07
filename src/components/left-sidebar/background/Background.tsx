import { useState } from "react";
import { BackgroundHeader } from "./BackgroundHeader";
import { BackgroundContent } from "./BackgroundContent";
import LeftSidebarLayout from "../LeftSidebarLayout";

export const Background = () => {
  const [bgType, setBgType] = useState<"color" | "image">("color");

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <BackgroundHeader bgType={bgType} setBgType={setBgType} />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <BackgroundContent bgType={bgType} />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

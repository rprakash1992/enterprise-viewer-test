import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import type { Step } from "../../../store/StepsSlice";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { StepsHeader } from "./StepsHeader";
import { StepsContent } from "./StepsContent";

export const Steps = () => {
  const steps = useStore((state) => state.steps);
  const appliedStep = useStore((state) => state.appliedStep);
  const applyStep = useStore((state) => state.applyStep);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);
  const navigate = useNavigate();

  const handleClick = (variable: Step) => {
    applyStep(variable);
    navigate("/color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <StepsHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content noPadding>
        <StepsContent
          steps={steps}
          appliedStep={appliedStep}
          handleClick={handleClick}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

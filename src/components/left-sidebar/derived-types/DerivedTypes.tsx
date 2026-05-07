import { useNavigate } from "react-router";
import { useStore } from "../../../store";
import type { DerivedTypeItem } from "../../../store/DerivedTypesSlice";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { DerivedTypesHeader } from "./DerivedTypesHeader";
import { DerivedTypesContent } from "./DerivedTypesContent";

export const DerivedTypes = () => {
  const navigate = useNavigate();
  const derivedTypes = useStore((state) => state.derivedTypes);
  const appliedDerivedType = useStore((state) => state.appliedDerivedType);
  const applyDerivedType = useStore((state) => state.applyDerivedType);
  const filterTempTabItems = useStore((state) => state.filterTempTabItems);

  const handleClick = (item: DerivedTypeItem) => {
    applyDerivedType(item);
    navigate("/color_map_edit");
    filterTempTabItems();
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <DerivedTypesHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        <DerivedTypesContent
          derivedTypes={derivedTypes}
          appliedDerivedType={appliedDerivedType}
          handleClick={handleClick}
        />
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

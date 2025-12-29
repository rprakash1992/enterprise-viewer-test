import {
  IconAdjustmentsCode,
  IconAdjustmentsCog,
  IconCategory,
  IconChartDots3,
  IconColorFilter,
  IconTimeline,
} from "@tabler/icons-react";
import { useStore } from "../../../store";
import type { MenuItem } from "../../../store/MenuSlice";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import LeftSidebarLayout from "../LeftSidebarLayout";
import { ColorMapEditHeader } from "./ColorMapEditHeader";

const colorMapEditItems: MenuItem[] = [
  {
    id: "variable",
    label: "Variable",
    icon: IconChartDots3,
  },
  {
    id: "steps_and_subcase",
    label: "Steps and Subcase",
    icon: IconTimeline,
  },
  {
    id: "derived_types",
    label: "Derived Types",
    icon: IconCategory,
  },
  {
    id: "color_palette",
    label: "Color Palette",
    icon: IconColorFilter,
  },
  {
    id: "value_settings",
    label: "Value Settings",
    icon: IconAdjustmentsCog,
  },
  {
    id: "legend_settings",
    label: "Legend Settings",
    icon: IconAdjustmentsCode,
  },
];

export const ColorMapEdit = () => {
  const appliedVariable = useStore((state) => state.appliedVariable);
  const appliedStep = useStore((state) => state.appliedStep);
  const appliedDerivedType = useStore((state) => state.appliedDerivedType);
  const insertTabItem = useStore((state) => state.insertTabItem);
  const setSelectedTabItemId = useStore((state) => state.setSelectedTabItemId);

  const handleClick = (item: MenuItem) => {
    insertTabItem({ ...item, type: "temporary" });
    setSelectedTabItemId(item.id);
  };

  const getAppliedColorMap = (colorMapId: string) => {
    let result = "";

    switch (colorMapId) {
      case "variable": {
        result = appliedVariable.title;
        break;
      }
      case "steps_and_subcase": {
        result = appliedStep.title;
        break;
      }
      case "derived_types": {
        result = appliedDerivedType.title;
        break;
      }
      case "color_palette": {
        result = "";
        break;
      }
      case "value_settings": {
        result = "";
        break;
      }
      case "legend_settings": {
        result = "";
        break;
      }
      default: {
        return "";
      }
    }

    return `(${result})`;
  };

  return (
    <LeftSidebarLayout>
      <LeftSidebarLayout.Header>
        <ColorMapEditHeader />
      </LeftSidebarLayout.Header>
      <LeftSidebarLayout.Content>
        {colorMapEditItems.map((item) => (
          <MenuListItem
            key={item.id}
            label={`${item.label} ${getAppliedColorMap(item.id)}`}
            onClick={() => handleClick(item)}
          />
        ))}
      </LeftSidebarLayout.Content>
    </LeftSidebarLayout>
  );
};

import { useNavigate } from "react-router";
import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import IconGeometryTransform from "../../../assets/icons/IconGeometryTransform";
import IconAssemblyTree from "../../../assets/icons/IconAssemblyTree";
import IconDisplayModes from "../../../assets/icons/IconDisplayModes";

const items = [
  {
    id: "assembly_tree",
    label: "Assembly Tree",
    icon: IconAssemblyTree,
    route: "/assembly_tree",
  },
  {
    id: "parts_list",
    label: "Parts List",
    icon: IconAssemblyTree,
    route: "/parts_list",
  },
  {
    id: "display_modes",
    label: "Display Modes",
    icon: IconDisplayModes,
    route: "/display_modes",
  },
  {
    id: "geometry_transform",
    label: "Geometry Transform",
    icon: IconGeometryTransform,
    route: "/geometry_transform",
  },
];

export const GeometryContent = () => {
  const navigate = useNavigate();

  return (
    <>
      {items.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.label}
          leftIcon={item.icon}
          onClick={() => navigate(item.route)}
        />
      ))}
    </>
  );
};

import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { GuideItem } from "../../../store/GuidesSlice";

interface GuidesContentProps {
  filteredItems: GuideItem[];
}

export const GuidesContent = ({ filteredItems }: GuidesContentProps) => {
  return (
    <>
      {filteredItems.map((item) => (
        <MenuListItem key={item.id} label={item.title} />
      ))}
    </>
  );
};

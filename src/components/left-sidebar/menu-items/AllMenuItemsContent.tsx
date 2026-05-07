import { MenuListItem } from "../../common/menu-list-item/MenuListItem";
import type { MenuItem } from "../../../store/MenuSlice";

interface AllMenuItemsContentProps {
  filteredItems: MenuItem[];
  onItemClick: (e: React.MouseEvent, item: MenuItem) => void;
}

export const AllMenuItemsContent = ({
  filteredItems,
  onItemClick,
}: AllMenuItemsContentProps) => {
  return (
    <>
      {filteredItems.map((item) => (
        <MenuListItem
          key={item.id}
          label={item.label}
          leftIcon={item.icon}
          isDisabled={item.isDisabled}
          onClick={(e) => onItemClick(e, item)}
        />
      ))}
    </>
  );
};

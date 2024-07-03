export type MenuItemProps = {
  to: string;
  label: string;
  handleClick?: () => void;
};

export type MobileMenuProps = {
  isOpen: boolean;
  handleClick: () => void;
};

export type MenuItemsProps = {
  handleClick?: () => void;
  type: string;
};

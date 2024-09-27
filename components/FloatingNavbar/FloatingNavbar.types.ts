export type FloatingNavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export type FloatingNavbarProps = {
  navItems: FloatingNavItem[];
  className?: string;
};

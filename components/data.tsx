interface NavItem {
    [x: string]: any;
    label: string;
    href: string;
  }
  
  export const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Sobre nós", href: "/about" },
    { label: "Produtos", href: "/produtos" },
    { label: "Contato", href: "/contato" },
  ];
  
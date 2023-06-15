import React from 'react';
import { Link, useColorModeValue } from "@chakra-ui/react";

interface DesktopNavItemProps {
  label: string;
  href?: string;
  linkColor: string;
  linkHoverColor: string;
}

const DesktopNavItem: React.FC<DesktopNavItemProps> = ({ label, href, linkColor, linkHoverColor }) => {
  return (
    <Link href={href ?? "#"} p={2} fontSize="sm" fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
      {label}
    </Link>
  );
};

export default DesktopNavItem;

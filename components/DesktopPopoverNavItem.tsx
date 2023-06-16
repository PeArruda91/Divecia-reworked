import React from 'react';
import { Link, useColorModeValue, Popover, PopoverTrigger, PopoverContent, Stack, Box } from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";
import DesktopNavItem from './DesktopNavItem';

interface DesktopPopoverNavItemProps {
  label: string;
  children: DesktopNavItem[];
  linkColor: string;
  linkHoverColor: string;
}

const DesktopPopoverNavItem: React.FC<DesktopPopoverNavItemProps> = ({ label, children, linkColor, linkHoverColor }) => {
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Popover trigger="hover" placement="bottom-start">
      <PopoverTrigger>
        <Link p={2} fontSize="sm" fontWeight={500} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }}>
          {label}
        </Link>
      </PopoverTrigger>

      <PopoverContent border={0} boxShadow="xl" bg={popoverContentBgColor} p={4} rounded="xl" minW="sm">
        <Stack>
          {children.map((child) => (
            <DesktopSubNav key={child.label} {...child} />
          ))}
        </Stack>
      </PopoverContent>
    </Popover>
  );
};

export default DesktopPopoverNavItem;

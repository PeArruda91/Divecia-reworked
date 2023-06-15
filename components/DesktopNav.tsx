/* eslint-disable react/no-children-prop */
import React from 'react';
import { Stack, useColorModeValue } from "@chakra-ui/react";
import DesktopNavItem from "./DesktopNavItem";
import DesktopPopoverNavItem from "./DesktopPopoverNavItem";
import { NAV_ITEMS } from "./data";

const DesktopNav: React.FC = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <React.Fragment key={navItem.label}>
          {navItem.children ? (
            <DesktopPopoverNavItem children={[]} {...navItem} linkColor={linkColor} linkHoverColor={linkHoverColor} />
          ) : (
            <DesktopNavItem {...navItem} linkColor={linkColor} linkHoverColor={linkHoverColor} />
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

export default DesktopNav;

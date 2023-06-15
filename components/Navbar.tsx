/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Box, Flex, Text, IconButton, Collapse, Icon, Link, useColorModeValue, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex bg="white" color="gray.600" minH="60px" py={{ base: 2 }} px={{ base: 4 }} borderBottom={1} borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.900")} align="center">
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant="ghost" aria-label="Toggle Navigation" />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }} align="center">
          <Text textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily="heading" color={useColorModeValue("gray.800", "white")}>
            Div & Cia
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;

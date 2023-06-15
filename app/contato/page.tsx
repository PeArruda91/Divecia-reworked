"use client"

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Container bg="#FFFFFF" maxW="full" mt={0} centerContent overflow="hidden">
  <Flex justifyContent="center" alignItems="center">
    <Box
      bg="#F2F2F2"
      color="#333333"
      borderRadius="lg"
      m={{ sm: 4, md: 16, lg: 10 }}
      p={{ sm: 5, md: 5, lg: 16 }}
    >
      <Box p={4}>
        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
          <WrapItem>
            <Box>
              <Heading textAlign="center">Contato</Heading>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#333333"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdPhone color="#333333" size="20px" />}
                  >
                    (11) 98765-4321
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#333333"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdEmail color="#333333" size="20px" />}
                  >
                    divecia@hotmail.com
                  </Button>
                  <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#333333"
                    _hover={{ border: '2px solid #1C6FEB' }}
                    leftIcon={<MdLocationOn color="#333333" size="20px" />}
                  >
                    São Paulo, Brasil
                  </Button>
                </VStack>
              </Box>
            </Box>
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  </Flex>
</Container>

  );
}
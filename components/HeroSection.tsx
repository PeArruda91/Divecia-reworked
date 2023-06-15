import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";

export default function Herosection() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              Div & Cia
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              A Grife das Divisórias
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Div & Cia é um comércio especializado em oferecer elegância e
            funcionalidade em soluções sofisticadas de divisórias e vidros. Com
            uma ampla gama de opções de design e materiais de alta qualidade,
            proporcionamos ambientes modernos, versáteis e elegantes, atendendo
            às necessidades exclusivas de cada cliente. Nossos produtos são
            cuidadosamente selecionados para oferecer durabilidade, privacidade
            e beleza estética, transformando espaços residenciais e comerciais
            em verdadeiras obras de arte arquitetônica. Nossa equipe altamente
            qualificada está pronta para oferecer um atendimento personalizado,
            auxiliando na escolha das melhores soluções para cada projeto. Seja
            para ambientes corporativos, residenciais, lojas ou estabelecimentos
            comerciais, a Div & Cia é a escolha perfeita para aqueles que buscam
            o equilíbrio perfeito entre estética e funcionalidade em divisórias
            e vidros sofisticados.
          </Text>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            align="center"
            justify="center"
          >
            <Button
              rounded={"full"}
              bg={"green.400"}
              color={"white"}
              _hover={{
                bg: "green.800",
              }}
            >
              <Link href="https://www.google.com/" isExternal>
                Entre em Contato
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          borderRadius={"lg"}
          src={
            "https://images.pexels.com/photos/6794926/pexels-photo-6794926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          padding= '32px'
        />
      </Flex>
    </Stack>
  );
}

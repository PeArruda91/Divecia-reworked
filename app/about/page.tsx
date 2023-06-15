"use client";

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

export default function aboutSection() {
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
                // eslint-disable-next-line react-hooks/rules-of-hooks
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
              Nossa visão de mercado.
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Transformando seus Div & Cia, nossa missão é fornecer
            serviços de design de interiores e remodelação de espaços que sejam
            acessíveis a todos. Nossa equipe é composta por profissionais
            experientes e apaixonados pelo que fazem. Estamos prontos para
            atender a todas as necessidades dos nossos clientes, oferecendo uma
            variedade de serviços de design e remodelação de interiores. O que
            oferecemos: Design de Interiores: Nossos especialistas em design
            estão prontos para transformar seus espaços. Combinando conhecimento
            estético e funcionalidade, criamos ambientes que refletem seu estilo
            pessoal e atendem às suas necessidades diárias. Remodelação de
            Interiores: Se você deseja renovar e atualizar seus ambientes, nossa
            equipe de remodelação está aqui para ajudar. Trabalhamos em estreita
            colaboração com você para compreender seus objetivos e transformar
            suas ideias em realidade, proporcionando uma nova experiência em
            seus espaços. Por que escolher a Div & Cia : Equipe
            especializada: Nossos profissionais experientes têm o conhecimento e
            a habilidade necessários para criar designs incríveis e realizar
            remodelações de alta qualidade. Estamos comprometidos em entregar
            resultados excepcionais. Atendimento ao cliente: A satisfação do
            cliente é nossa prioridade número um. Estamos sempre prontos para
            ouvir suas necessidades, responder às suas perguntas e superar suas
            expectativas. Sua felicidade com nossos serviços é o que nos
            impulsiona. Acessibilidade: Acreditamos que todos merecem ter
            espaços bonitos e funcionais. Por isso, nos esforçamos para oferecer
            soluções de design de interiores e remodelação acessíveis, sem
            comprometer a qualidade. Estamos ansiosos para trabalhar com você e
            transformar seus espaços em algo extraordinário. Entre em contato
            conosco hoje mesmo para uma consulta inicial gratuita. Div & Cia: seu parceiro confiável em design de interiores e remodelação.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          borderRadius={"lg"}
          src={
            "https://www.divdesign.com.br/wp-content/uploads/2019/04/08-2-900x500.jpg"
          }
          padding="32px"
        />
      </Flex>
    </Stack>
  );
}

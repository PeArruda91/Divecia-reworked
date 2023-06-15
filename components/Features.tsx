import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const titles: string[] = [
"Amplas opções de design para ambientes modernos", 
"Materiais de alta qualidade garantem durabilidade e privacidade", 
"Transforme seu espaço residencial em uma obra de arte arquitetônica", 
"Atendimento personalizado para escolha das melhores soluções",
"Elegância e funcionalidade para ambientes corporativos e comerciais",
"Equilíbrio perfeito entre estética e funcionalidade em cada projeto",
"Equipe qualificada pronta para auxiliar em suas necessidades exclusivas",
"Divisórias e vidros sofisticados para criar espaços versáteis e elegantes"
];
const texts: string[] = [
  "Oferecemos uma ampla variedade de designs que se adequam perfeitamente a ambientes contemporâneos e sofisticados.",
  "Nossos materiais premium proporcionam resistência e privacidade, garantindo soluções duradouras e funcionais.",
  "Criamos divisórias e vidros que transformam sua casa em um ambiente elegante e inspirador.",
  "Nossa equipe especializada oferece um atendimento personalizado para ajudá-lo a escolher as soluções ideais para o seu projeto.",
  "Proporcionamos soluções elegantes e práticas para ambientes de negócios, tornando-os profissionais e convidativos.",
  "Buscamos a harmonia entre o visual e a funcionalidade, criando espaços que são visualmente atraentes e eficientes",
  "Nossa equipe altamente qualificada está pronta para entender suas necessidades e oferecer soluções personalizadas.",
  "Criamos divisórias e vidros de alta qualidade que transformam espaços, adicionando sofisticação e versatilidade"
];

const features: { id: number; title: string; text: string }[] = Array.apply(
  null,
  Array(8)
).map((x, i) => {
  return {
    id: i,
    title: titles[i % titles.length],
    text: texts[i % texts.length],
  };
});

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Por qual motivo escolher a Div & Cia?</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
        Escolha perfeita para transformar seu espaço em uma verdadeira obra de arte. Com designs sofisticados, materiais de alta qualidade e atendimento personalizado, proporcionamos elegância, funcionalidade e um equilíbrio perfeito entre estética e praticidade. Crie ambientes modernos, versáteis e inspiradores com nossas soluções em divisórias e vidros.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

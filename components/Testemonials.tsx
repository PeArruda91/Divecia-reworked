import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function Testemonials() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
        Na Div & Cia, oferecemos amplas opções de design e materiais de alta qualidade, resultando em soluções duráveis que garantem privacidade e satisfação do cliente. Com nosso atendimento personalizado, auxiliamos na escolha das melhores soluções, otimizando recursos e maximizando o retorno do investimento. Nossa equipe qualificada garante eficiência na execução dos projetos, resultando em economia de tempo e redução de custos. Com divisórias e vidros sofisticados, criamos espaços versáteis e elegantes, agregando valor ao imóvel e potencializando oportunidades de negócio. Confie na Div & Cia para alcançar resultados financeiros sólidos e competitivos.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDAHKnh6lKTJ5B9Hwyl78qIe7nb52UQ9Qu7_rzELlk57iuA23GKBf-Sp4b2SzRX_Kf8k'
          }
          mb={2}
        />

        <Text fontWeight={600}>Josè Pereira</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          CEO
        </Text>
      </Box>
    </Stack>
  );
}
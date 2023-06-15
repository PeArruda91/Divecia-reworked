"use client";

import React from 'react';
import { Grid ,Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button, Divider } from '@chakra-ui/react'; // Importe os componentes necessários

interface CardData {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
}

const cards: CardData[] = [
  {
    title: 'Venha conhecer nossos produtos. ',
    description: 'Com mais de 15 anos de experiência, somos especializados no desenvolvimento de projetos de divisórias utilizando uma ampla variedade de materiais. Nossas opções incluem eucaplac, gesso drywall, materiais acústicos e incombustíveis, vidro duplo com persiana embutida, PVC, biombos, estações de trabalho, forros em PVC, gesso e isopor, pisos vinílicos, gesso 3D, janelas acústicas e muito mais. Trabalhamos com uma ampla gama de materiais de alta qualidade para garantir soluções personalizadas e duradouras para os projetos de nossos clientes.',
    price: '',
  },
  {
    imageSrc: 'https://images.squarespace-cdn.com/content/v1/5162b53de4b080e51178d1bd/1513340598127-YSMOM87UDGQACT8BMU3I/P8490995.jpg',
    altText: 'Divisória de vidro',
    title: 'Divisória de vidro',
    description: 'Sistema de separação transparente e estético, composto por painéis de vidro temperado fixados em perfis metálicos, proporcionando divisões internas sem comprometer a iluminação e o visual do ambiente.',
    price: '',
  },
  {
    imageSrc: 'https://1.bp.blogspot.com/-LTq6r7tYG2g/Uh_cxXei0VI/AAAAAAAAAzo/0qA55phguZQ/s1600/2013-08-29_12-20-07_757.jpg',
    altText: 'Forro de PVC',
    title: 'Forro de PVC',
    description: 'Revestimento de teto resistente e durável, fabricado em PVC, que oferece isolamento acústico, térmico e fácil manutenção. Ideal para ambientes comerciais e residenciais devido à sua versatilidade.',
    price: '',
  },
  {
    imageSrc: 'https://drywall.org.br/wp-content/uploads/2018/10/parede.jpg',
    altText: 'Drywall',
    title: 'Drywall',
    description: 'Sistema construtivo composto por placas de gesso acartonado, fixadas em estruturas metálicas, permitindo a criação rápida de paredes internas, tetos e revestimentos com excelentes características de isolamento acústico e térmico.',
    price: '',
  },
  {
    imageSrc: 'https://www.rcpisos.com.br/blog/wp-content/uploads/2021/02/essed.jpg',
    altText: 'Piso Vinílico',
    title: 'Piso Vinílico',
    description: 'Revestimento de piso sintético, fabricado em PVC, que imita texturas e padrões de madeira, pedra ou cerâmica. É resistente à umidade, fácil de limpar e possui boa absorção de ruídos.',
    price: '',
  },
  {
    imageSrc: 'https://www.decoresc.com.br/wp-content/uploads/sites/1519/2022/03/ff.jpg',
    altText: 'Forro de gesso',
    title: 'Forro de gesso',
    description: 'Revestimento para teto feito com placas de gesso, proporcionando acabamento liso e uniforme. É utilizado para ocultar instalações elétricas e hidráulicas, além de conferir isolamento térmico e acústico.',
    price: '',
  },
  {
    imageSrc: 'https://www.helpjanelasacusticas.com.br/wp-content/uploads/2017/04/Janelas-Ac%C3%BAsticas-de-Sobrepor-em-SP-Zona-Sul-3.jpg',
    altText: 'Janelas anti ruído',
    title: 'Janelas anti ruído',
    description: 'Janelas projetadas com materiais isolantes e técnicas avançadas para reduzir significativamente a transmissão de ruídos externos. Proporcionam conforto acústico em ambientes residenciais e comerciais.',
    price: '',
  },
];

const YourComponent = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
      {cards.map((card, index) => (
        <Card key={index} maxW='sm' mx="20px"> {/* Adiciona margem de 20px nas laterais */}
          <CardBody>
            <Image
              src={card.imageSrc}
              alt={card.altText}
              borderRadius='lg'
              boxSize='300px' // Largura desejada
              height='200px' // Altura desejada
              objectFit='cover' // Opcional: controla como a imagem se ajusta ao tamanho definido
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{card.title}</Heading>
              <Text>{card.description}</Text>
              <Text color='blue.600' fontSize='2xl'>
                {card.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
};

export default YourComponent;



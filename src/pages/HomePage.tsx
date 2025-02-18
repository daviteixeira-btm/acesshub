import {
  Flex,
  Text,
  Link,
  Icon,
  Card,
  Stack,
  Avatar,
  Heading,
  CardBody,
  useColorModeValue
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import Footer from '../components/Footer/Footer';
import TopMenu from '../components/TopMenu/TopMenu';

import { FaGithub, FaArrowRight } from 'react-icons/fa';

import article from '../../public/article.png';
import openSource from '../../public/openSource.png';
import recommendations from '../../public/userLike.png';

const HomePage = () => {

  const { t } = useTranslation();
  
  const bodyColor = useColorModeValue('gray.100', 'gray.800');
  const textSpanBlue = useColorModeValue('blue.600', 'blue.400');
  const bgBottonGithub = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.800');
  const cardsColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const bodySection2Color = useColorModeValue('gray.200', 'gray.700');
  const bgBottonGithubHover = useColorModeValue('gray.300', 'gray.500');
  const headingsColor = useColorModeValue('gray.900', 'whiteAlpha.900');
  const bgBottonIntroduction = useColorModeValue('blue.600', 'blue.400');
  const bgBottonIntroductionHover = useColorModeValue('blue.400', 'blue.600');

  const cardItem = [
    {
      avatarIMG: article,
      cardTitle: "homepage.referencePatternCard.title",
      cardText: "homepage.referencePatternCard.text"
    },
    {
      avatarIMG: recommendations,
      cardTitle: 'homepage.recommendationSetCard.title',
      cardText: 'homepage.recommendationSetCard.text'
    },
    {
      avatarIMG: openSource,
      cardTitle: 'homepage.openSourceExamplesCard.title',
      cardText: 'homepage.openSourceExamplesCard.text'
    }
  ]

  return (
    <Flex
      width='100%'
      height='100%'
      bg={bodyColor}
      textAlign='center'
      alignItems='center'
      flexDirection='column'
      justifyContent='center'
    >
      <TopMenu />

      <Flex
        mb='1rem'
        height='100%'
        padding='1rem'
        flexDirection='column'
        pt={['6rem', 0, 0, 0 ]}
        mt={[0, 0, '6rem', '6rem']}
        width={['100%', '100%', '60%', '60%']}
      >
        <Heading
          as='h1'
          fontWeight='700'
          fontFamily='Inter'
          color={headingsColor}
          textTransform='uppercase'
          mt={['2rem', '2rem', '4rem', '4rem']}
          fontSize={['2.5rem', '2.5rem', '3rem', '3.5rem']}
        >
          {t('homepage.title')} <Text as='span' color={textSpanBlue}>{t('homepage.titleBlue')}</Text>
        </Heading>

        <Heading
          as='h2'
          marginTop='1rem'
          fontWeight='400'
          fontSize='1.3rem'
          fontFamily='Inter'
          color={textColor}
        >
          {t('homepage.subtitle')}
        </Heading>
        
      </Flex>

      <Flex
        mb='2rem'
        display='flex'
        alignItems='center'        
        justifyContent='space-evenly'
        width={['100%', '100%', '50%', '40%']}
        flexDirection={['column', 'column', 'row', 'row']}
      >

        <NavLink to='/introducao'>
          <Flex
            as='span'
            fontSize='1.2rem'
            fontWeight='700'
            fontFamily='Inter'
            alignItems='center'
            borderRadius='.3rem'
            color='whiteAlpha.900'
            bg={bgBottonIntroduction}
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '12rem']}
            padding={['1rem', '1rem', '1rem', '1rem']}
            _hover={{ backgroundColor: bgBottonIntroductionHover }}
          >
            {t('homepage.introduction.button')} <Icon as={FaArrowRight} ml='.5rem'/>
          </Flex>
        </NavLink>

        {/*<Link
          isExternal
          _hover={{ textDecor: 'none' }}
          href='https://github.com/daviteixeira-btm/acesshub'
        >
          <Flex
            color={textColor}
            fontSize='1.2rem'
            fontWeight='700'
            fontFamily='Inter'
            alignItems='center'
            bg={bgBottonGithub}
            borderRadius='.3rem'
            justifyContent='space-around'
            mb={['1rem', '1rem', '0', '0']}
            height={['4rem', '4rem', 'auto', 'auto']}
            width={['12rem', '12rem', '10rem', '12rem']}
            _hover={{ backgroundColor: bgBottonGithubHover }}
            padding={['1rem', '1rem', '1rem', '1rem']}
          >
            <Icon as={FaGithub} mr='.5rem' />
            GitHub
          </Flex>
        </Link>*/}

      </Flex>

      <Flex
        mt='2rem'
        width='100%'
        height='100%'
        padding='1rem'
        alignItems='center'
        flexDirection='column'
        bg={bodySection2Color}
      >
        <Flex 
          width={['100%', '100%', '60%', '60%']}
        >
          <Heading
            as='h3'
            fontWeight='500'
            fontFamily='Inter'
            color={headingsColor}
            fontSize={['1.5rem', '1.5rem', '1.8rem', '1.8rem']}
          >
            {t('homepage.objective.subtitle')} <Text as='span' color={textSpanBlue}>{t('homepage.objective.subtitleBlue')}</Text> {t('homepage.objective.subtitleAccessibility')}
          </Heading>
        </Flex>

        <Flex 
          w='100%' 
          mt='1rem' 
          justifyContent='space-evenly'
          flexDirection={['column', 'column', 'row', 'row']}
        >

          {
            cardItem.map((item, index) => (
              <Card 
                mt='1rem' 
                key={index}
                bg={cardsColor}
                maxW={['sm', '1rem', '14rem', '20rem', 'sm']}
              > 
                <CardBody>
                  <Avatar size='lg' name='Card Info' src={item.avatarIMG} />
                  <Stack mt='6' spacing='3'>
                    <Heading as='h4' fontFamily='Inter' fontWeight='700' size='md'>
                      {t(item.cardTitle)}
                    </Heading>
                    <Text fontFamily='Inter' fontWeight='400' size='md'>
                      {t(item.cardText)}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            ))
          }
          
        </Flex>
      
      </Flex>

      <Footer />
      
    </Flex>
  );
};

export default HomePage;
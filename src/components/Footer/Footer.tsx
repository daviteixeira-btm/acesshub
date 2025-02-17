import { 
    Flex,
    Link,
    Text,
    Image,
    ListItem,
    UnorderedList,
    useColorModeValue
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import logo from '../../../public/logo-accesshub.png';

const Footer = () => {

  const footerColor = useColorModeValue('blue.600', 'gray.800');

  const { t } = useTranslation();

  return (
    <Flex
        h='auto'
        w='100%'
        as='footer'
        padding='1rem'
        bg={footerColor}
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='0px 4px 12px 4px rgba(0, 0, 0, 0.05)'
    >
        <Flex
            p='1rem'
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'row', 'row']}
        >

            <Flex
                p='.5rem'
                mb='1rem'
                flexDirection='row'
                alignItems='center' 
                justifyContent='start'
            >
                <NavLink to="/">
                    <Image
                        src={logo}
                        boxSize='50px'
                        borderRadius='full'
                        alt='Logomarca do AccessHub no footer.'
                    />
                </NavLink>

                <Text
                    ml='1rem'
                    fontWeight='600' 
                    fontSize='1.3rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    AccessHub
                </Text>
            </Flex>

            <UnorderedList
                mb='1rem'
                textAlign='start'
                style={{listStyle: 'none'}}
            >
                
                <ListItem
                    fontWeight='600' 
                    fontSize='1.1rem'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    {t('footer.documetation')}
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <NavLink to='/componentes'>
                        {t('footer.components')}
                    </NavLink>
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <NavLink to='/current-scenario'>
                        {t('footer.currentScenario')}
                    </NavLink>
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <NavLink to='/credits'>
                        {t('footer.credits')}
                    </NavLink>
                </ListItem>
            </UnorderedList>

            <UnorderedList
                mb='1rem'
                textAlign='start'
                style={{listStyle: 'none'}}
            >
                
                <ListItem
                    fontWeight='600' 
                    fontSize='1.1rem'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    {t('footer.community')}
                </ListItem>

                <ListItem
                    mt='.5rem'
                    fontFamily='Inter'
                    color='whiteAlpha.900'
                >
                    <Link 
                        isExternal
                        _hover={{ textDecoration: 'none' }}
                        href='https://github.com/daviteixeira-btm/acesshub'
                    >
                        GitHub
                    </Link>
                </ListItem>
            </UnorderedList>

        </Flex>
        
        <Flex
            p='1rem'
            mb='2rem'
            justifyContent='space-evenly'
            flexDirection={['column', 'column', 'column', 'row']}
        >
            <Flex></Flex>

            <Flex
                mb='1rem'
                justifyContent='center'
            >
                <Link
                    isExternal
                    fontSize='1rem'
                    textAlign='center'
                    bg='blackAlpha.900' 
                    padding='.3rem 1rem'
                    borderRadius='.5rem'
                    color='whiteAlpha.900'
                    href='https://vercel.com/'
                    _hover={{ textDecoration: 'none' }}
                >
                    Deployed by ▲ Vercel 
                </Link>
            </Flex>

            <Flex
                alignItems='center'
                justifyContent='center'
            >
                <Text
                    fontWeight='400' 
                    fontSize='1.1rem'
                    textAlign='start'
                    fontFamily='Inter' 
                    color='whiteAlpha.900' 
                >
                    {t('footer.copyright')} <Link href='https://github.com/daviteixeira-dev' textDecor='underline' isExternal>{t('footer.developedBy')}</Link>{t('footer.developedText')} <Link _hover={{ textDecoration: 'none' }} isExternal fontWeight='bold' href='https://choosealicense.com/licenses/mit/'>{t('footer.mit')}</Link>
                </Text>
            </Flex>
        </Flex>

    </Flex>
  );
};

export default Footer;
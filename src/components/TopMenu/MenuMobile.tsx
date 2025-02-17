import { 
  Icon, 
  Flex, 
  Image,
  Button, 
  Drawer,
  DrawerBody, 
  IconButton, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerContent, 
  DrawerOverlay, 
  useDisclosure, 
  DrawerCloseButton, 
  useColorModeValue,
} from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

import { FaHome, FaRegCompass, FaTasks, FaThLarge } from 'react-icons/fa';

import { FiMenu } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import MenuSideBarItem from '../MenuSideBar/MenuSideBarItem';
import TranslationButton from '../TranslationButton/TranslationButton';

import ToogleColorMode from '../ToogleComponent/ToogleColorMode';

import logoMobile from '../../../public/logo-accesshub.png'

interface MenuItemsProps {
    marginBottom: string
}

const MenuMobile = (props: MenuItemsProps) => {

  const { t } = useTranslation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuColor = useColorModeValue('blue.600', 'gray.800');
  const buttonBgColor = useColorModeValue('blue.400', 'gray.700');
  const menuIconsColor = useColorModeValue('blue.500', 'blue.300');
  const colorToogle = useColorModeValue('yellow.300', 'orange.300');
  const menuSideBarColorBg = useColorModeValue('#cbd5e0', '#bee3f8');

  const menuMobileItem = [
    {
        path: '/',
        name: 'menuMobile.home',
        icon: <FaHome />
    },
    {
        path: '/introducao',
        name: 'menuMobile.introduction',
        icon: <FaRegCompass />
    },
    {
        path: '/componentes',
        name: 'menuMobile.components',
        icon: <FaThLarge />
    },
    {
      path: '/current-scenario',
      name: 'menuMobile.currentScenario',
      icon: <FaTasks />
    },
  ]

  return (
    <Flex 
      as='nav'
      h='5rem'
      w='100%'
      zIndex={2}
      px='1.5rem'
      bg={menuColor}
      boxShadow='sm'
      color={colorToogle}
      alignItems='center'
      mb={props.marginBottom}
      justifyContent='space-between' 
      position={['fixed', 'relative']}
    >
        <IconButton 
          onClick={onOpen} 
          icon={<FiMenu />} 
          bg={buttonBgColor} 
          color='whiteAlpha.900' 
          aria-label='Menu Icon' 
        />

        <NavLink to="/">
          <Image
            boxSize='50px'
            src={logoMobile}
            borderRadius='full'
            alt='Logomarca do AccessHub.'
          />
        </NavLink>
        
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />

          <DrawerContent>
            
            <DrawerCloseButton />

            <DrawerHeader>{t('menuMobile.title')}</DrawerHeader>

            <DrawerBody>

              <Flex justifyContent="space-evenly">
                <TranslationButton language='en'/>
                <TranslationButton language='pt'/>
              </Flex>

              <Flex
                as='ul'
                p='1rem'
                flexDirection='column'
              >
                {
                  menuMobileItem.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path} 
                      style={({ isActive }) => 
                        isActive 
                        ? { 
                            background: menuSideBarColorBg, borderRadius: '.5rem', margin: '.5rem 0'
                          } : {background: 'none', margin: '.5rem 0'}
                        }
                    >
                      <Flex
                        as='li'
                        p='.5rem'
                        alignItems='center'
                        borderRadius='.5rem'
                        justifyContent='start'
                        _hover={{ background: menuSideBarColorBg }}
                      >
                        <Icon
                          fontSize='1.5rem'
                          color={menuIconsColor}
                        >
                          {item.icon}
                        </Icon>

                        <MenuSideBarItem menuOption={t(item.name)} />
                      </Flex>
                    </NavLink>
                  ))
                }
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              
              <Button variant='outline' mr={3} onClick={onClose}>
                {t('menuMobile.closeButton')}
              </Button>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>
        <ToogleColorMode />
    </Flex>
  );
};

export default MenuMobile;
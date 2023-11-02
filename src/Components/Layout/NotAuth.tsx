import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
    MenuList,
    useColorMode,
    Button,
  Stack,
  
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdOutlinePolicy } from 'react-icons/md';
import { NextRouter, useRouter } from 'next/router';
import Navlink from "next/link"
import {FaHistory} from "react-icons/fa"
import {SiAuthy} from "react-icons/si"
import { BsFillPeopleFill } from "react-icons/bs"
// import { Footer } from './Footer/Footer';


import { useState, useEffect } from 'react';



interface LinkItemProps {
  name: string;
  icon: IconType;
  url:string
}
const LinkItems: LinkItemProps[] = [
  { name: 'Home', icon: FiHome, url:"/" },
  // { name: 'Sign up', icon: AiOutlineUserAdd,url:"/signup" },
  // { name: 'Login', icon: AiOutlineUserAdd,url:"/login" },
  { name: 'About Blue Sky', icon: SiAuthy, url:"/aboutus" },
  // { name: 'T and C', icon: MdOutlinePolicy , url:"/tc" },
];

export default function NotAuthHeader({
    
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode()
  
    // const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      backgroundImage="url('/assets/images/bg2.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      {/* <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      /> */}
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        {/* <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent> */}
      </Drawer>
      {/* mobilenav */}
      {/* <MobileNav onOpen={onOpen} /> */}
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      <footer
        style={
          {
            textAlign: "center",
            backgroundColor: "#FF8400",
            padding: "0.3rem",
            color: "white",
            position: "fixed",
            bottom: 0,
            left: 0,
            width:"100%"
          }
        }>
       <Link href={"/about"}  color='white'> About Blue Sky</Link>
     </footer>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Blue Sky
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  url:string
}
  
export const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Link href={url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg:"red",
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    const { colorMode, toggleColorMode } = useColorMode()
  const router:NextRouter = useRouter()
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
        <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Stack>
        </Flex>
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Blue Sky
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    '/assets/images/icon.jpg'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">welcome</Text>
                  <Text fontSize="xs" color="gray.600">
                    user
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  {/* <FiChevronDown /> */}
                </Box>
              </HStack>
            </MenuButton>
            {/* <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem as={"a"} href='/profile'>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>
                
              </MenuItem>
            </MenuList> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
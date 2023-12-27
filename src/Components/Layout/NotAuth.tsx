import React, { ReactNode } from 'react';
import {
  Box,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

export default function NotAuthHeader({
    
  children,
}: {
  children: ReactNode;
}) {
 
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue('gray.100', 'gray.900')}
      backgroundImage="url('/assets/images/bg2.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      <Box  p="4">
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


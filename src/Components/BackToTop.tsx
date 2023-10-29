import React, { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { useRouter } from 'next/router';

const BackToTopButton: React.FC<{ route: string | null }> = ({ route }) => {
    const router = useRouter()
    console.log("route",route)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
      // });
      router.push(`${route}`)
  };

  return (
    <>
      {isVisible && (
        <Button
            className="back-to-top"
            onClick={scrollToTop}
            rightIcon={<FaArrowUp />}
            position="fixed"
            bottom="0"
            right="0"
            width={"100%"}
            zIndex="1"
            colorScheme="teal"
        >
          return to App
        </Button>
      )}
    </>
  );
}

export default BackToTopButton;

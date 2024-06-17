"use client";
import { Box, Flex, Button, Image, useTheme, HStack } from "@chakra-ui/react";
import Logo from "@/_assets/images/logo_tranverse.png";
import { useState } from "react";

const MainHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Box bg="white" px={4} py={2} shadow="md" flexDir={"row"}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW={"8xl"}
        mx="auto"
      >
        <Image src={Logo.src} alt="Logo" width={200} />
        <Flex>
          <Button colorScheme="blue" variant="ghost" mr={4}>
            새 글 쓰기
          </Button>
          <Button colorScheme="blue">{isLogin ? "로그아웃" : "로그인"}</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainHeader;

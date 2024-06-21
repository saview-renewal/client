"use client";
import { Box, Flex, Button, Image, useTheme, HStack } from "@chakra-ui/react";
import Logo from "@/_assets/images/logo_tranverse.png";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { useRouter } from "next/navigation";

const MainHeader = ({ maxW }: { maxW: string }) => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  const isFirstPage = maxW !== "8xl";
  const handlePressButton = () => {
    if (!isLogin) {
      router.push("/users/login");
    }
  };
  return (
    <Box
      bg="transparent"
      px={4}
      py={2}
      shadow={maxW === "8xl" ? "lg" : undefined}
      width="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW={maxW}
        mx="auto"
      >
        <HStack gap={20}>
          <Image src={Logo.src} alt="Logo" width={200} mr={"20px"} />
          {!isFirstPage && <SearchBar />}
        </HStack>
        <Flex>
          <Button colorScheme="blue" variant="ghost" mr={4}>
            새 글 쓰기
          </Button>
          <Button onClick={handlePressButton} colorScheme="blue">
            {isLogin ? "로그아웃" : "로그인"}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MainHeader;

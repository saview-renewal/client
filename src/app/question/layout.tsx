"use client";
import SearchModal from "@/_components/ Modal/SearchModal";
import MainHeader from "@/_components/main-header";
import { Box, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useResponse } from "@/_hooks";

const QuestionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { isTabletVertical } = useResponse();
  return (
    <>
      <Box width="100%" height="100vh" bgColor={"white"}>
        <MainHeader maxW="8xl" />
        <HStack maxW={"8xl"} mx={"auto"} width={"100%"} height={"100vh"}>
          {!isTabletVertical && (
            <Box borderRightWidth={"1px"} width={"280px"} height={"100vh"}>
              <Text>sidebar</Text>
              <Text>menu2</Text>
              <Text>menu3</Text>
              <Text>menu4</Text>
            </Box>
          )}

          <Box>{children}</Box>
        </HStack>
      </Box>
      <SearchModal />
    </>
  );
};

export default QuestionLayout;

import SearchModal from "@/_components/ Modal/SearchModal";
import SearchBar from "@/_components/SearchBar/SearchBar";
import MainHeader from "@/_components/main-header";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <MainHeader maxW="100%" />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign={"center"}
      >
        Prepare for a Software Engineering Interview
      </Text>

      <Box height={"2rem"}></Box>
      <Text fontSize="xl" color={"gray.500"} textAlign={"center"}>
        Write your interview answers and get feedback from others.
      </Text>
      <Box height={"2rem"}></Box>
      <Box>
        <Link href="/question">
          <Button colorScheme="blue" size="lg" variant="solid" mr="12px">
            Get Started
          </Button>
        </Link>
        <SearchBar />
      </Box>
      <SearchModal />
    </>
  );
}

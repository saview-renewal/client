import { Box, Button, HStack, Input, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Box w={"100%"} h={"100vh"} bg="white">
      <VStack alignItems={"center"}>
        <Box w={"xs"}>
          <Text mt={"100px"} fontSize={"3xl"} fontWeight={"bold"}>
            Sign in to Saview
          </Text>
          <Text mt={"40px"}>Email or username</Text>
          <Input mt={"10px"} maxW={"xs"} name="email" borderRadius={12} />
          <Text mt={"10px"}>Password</Text>
          <Input mt={"10px"} maxW={"xs"} borderRadius={12} name="password" />
          <Link href="/users/account-recovery">
            <Text mt={"10px"} textAlign={"right"}>
              Forgot password?
            </Text>
          </Link>
          <Button
            mt={"20px"}
            maxW={"xs"}
            colorScheme="blue"
            w="100%"
            height={"48px"}
          >
            SIGN IN
          </Button>
          <HStack mt={"30px"} justifyContent={"center"}>
            <Text textAlign={"center"} fontWeight={"500"}>
              New to Saview?{" "}
            </Text>
            <Link href="/users/register">
              <Text color={"blue.500"} fontWeight={"bold"}>
                Register
              </Text>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginPage;

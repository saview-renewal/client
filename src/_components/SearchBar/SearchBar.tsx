import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { MdKeyboardCommandKey } from "react-icons/md";
const SearchBar = () => {
  return (
    <Button
      size="lg"
      shadow="lg"
      bg="white"
      minW={"30rem"}
      border="1px"
      borderColor={"gray.200"}
    >
      <HStack flex={1} justifyContent={"space-between"}>
        <HStack>
          <MagnifyingGlassIcon width={16} height={16} />
          <Text color="gray.400">Search the docs</Text>
        </HStack>
        <HStack bg="gray-800">
          <MdKeyboardCommandKey color="black" />
          <Text color="black">K</Text>
        </HStack>
      </HStack>
    </Button>
  );
};

export default SearchBar;

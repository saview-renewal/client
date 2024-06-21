"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";

const SearchModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    const callback = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, []);
  const handleSubmit = () => {
    //TODO: 추후 개발
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay />
      <ModalContent borderRadius={12} marginTop="15rem" height="68">
        <ModalBody>
          <HStack height="100%">
            <MagnifyingGlassIcon width={24} height={24} />
            <Input
              placeholder="Search the docs"
              autoFocus
              margin={0}
              maxLength={64}
              variant={"unstyled"}
              fontSize={""}
              onSubmit={() => handleSubmit()}
            />
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;

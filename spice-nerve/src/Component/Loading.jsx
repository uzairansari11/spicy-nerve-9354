import React from "react";
import { Spinner, Center } from "@chakra-ui/react";
export const Loading = () => {
  return (
    <Center>
      <Spinner
        color="#ff6262"
        size="xl"
        thickness="6px"
        emptyColor="#8c52ff"
        m="100"
        p={"20"}
      />
    </Center>
  );
};

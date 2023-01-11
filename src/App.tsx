import { FC } from 'react';
import {
  Flex,
  Input,
  Stack,
  Text
} from '@chakra-ui/react';

const App: FC = () => {

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgColor="blackAlpha.400"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Box 3</Text>
        <Input variant='outline' placeholder='Outline' />
      </Stack>
    </Flex>
  );
};

export default App;

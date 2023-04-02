import * as React from 'react';
import { useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import HomePage from './HomePage';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import GlobalContext from './GlobalContext';

const IndexPage: React.FC<PageProps> = () => {
  const [state, setState] = useState({
    Page: HomePage,
    reader: {},
  });

  const Page = state.Page;

  const dispatch = (newState: Partial<typeof state>) => setState({ ...state, ...newState });

  return (
    <ChakraProvider>
      <GlobalContext.Provider value={{ ...state, dispatch }}>
        <Flex
          justify="center"
          bg="#d5cedc"
          color="white"
          minHeight={[900, 1200]}
          paddingTop={[4, 8, 12]}
        >
          {<Page />}
        </Flex>
      </GlobalContext.Provider>
    </ChakraProvider>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

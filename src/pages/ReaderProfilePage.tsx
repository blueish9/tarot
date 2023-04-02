import React, { useContext } from 'react';
import {
  Avatar,
  Box,
  Card,
  Heading,
  Highlight,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { Power } from '../data/meta';
import GlobalContext from './GlobalContext';
import BookingPage from './BookingPage';
import ActionButtons from '../components/ActionButtons';

const ReaderProfilePage = () => {
  const { reader, dispatch } = useContext(GlobalContext);
  return (
    <VStack width={'100%'} height={[2500, 1500]}>
      <ActionButtons title="ĐẶT LỊCH HẸN" osnSubmit={() => dispatch({ Page: BookingPage })} />

      <VStack>
        <Card width={[250, 600]} height={[400, 800]} bg="black">
          <Image src={reader.cardImg} alt="Green double couch with wooden legs" borderRadius="lg" />
        </Card>
      </VStack>

      <VStack alignItems="flex-start" width="100%" paddingX={[4, 12]}>
        <Biography />
        <ReadingPower />
        <SpreadTechnique />
      </VStack>
    </VStack>
  );
};

const Biography = () => {
  const { reader } = useContext(GlobalContext);
  return (
    <>
      <HStack>
        <Avatar name={reader.name} src={reader.avatarImg} size="lg" />
        <Box>
          <Heading size={['md', 'lg']}>{reader.name}</Heading>
          <Text>{reader.description}</Text>
        </Box>
      </HStack>

      <Text lineHeight="tall">
        <Highlight query={reader.deck} styles={{ px: '1', py: '1', bg: 'orange.100' }}>
          {reader.biography}
        </Highlight>
      </Text>
    </>
  );
};

const ReadingPower = () => {
  const { reader } = useContext(GlobalContext);
  return (
    <>
      <Heading size={['md', 'lg']}>{'Năng lực của ' + reader.name}</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th borderRight="1px dashed pink">Chủ đề</Th>
              <Th>Kinh Nghiệm đọc Tarot</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.keys(reader.powers).map((powerName) => {
              const quality = reader.powers[powerName];
              return (
                <Tr>
                  <Td borderRight="1px dashed pink">{Power[powerName]}</Td>
                  <Td>{new Array(quality).fill('⭐')}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

const SpreadTechnique = () => (
  <>
    <Heading as="h3" size={['md', 'lg']}>
      Cách trải bài
    </Heading>
    <Text>1 lá</Text>
    <Text>2 lá</Text>
    <Text>3 lá</Text>
  </>
);

export default React.memo(ReaderProfilePage);

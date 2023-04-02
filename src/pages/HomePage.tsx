import React, { FC, useContext } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  Text,
  VStack,
} from '@chakra-ui/react';
import GlobalContext from './GlobalContext';
import ReaderProfilePage from './ReaderProfilePage';
import { readers } from '../data/readers';

interface Props {}

const HomePage: FC<Props> = () => {
  const { dispatch } = useContext(GlobalContext);

  const selectReader = (reader) => {
    dispatch({
      Page: ReaderProfilePage,
      reader,
    });
  };

  const LoginForm = (
    <VStack marginBottom={[6, 12]}>
      <HStack spacing={[4, 8]} marginBottom="4px">
        <InputGroup>
          {/*<InputLeftElement pointerEvents="none" children={<StarIcon color="gray.300" />} />*/}
          <Input type="tel" placeholder="Mã đặt chỗ" />
        </InputGroup>

        <Button colorScheme="teal" size="lg" px={[12, 24]}>
          ĐĂNG NHẬP
        </Button>
      </HStack>

      <Text color="blackAlpha.700" fontSize={['md', 'lg']}>
        {'Nếu bạn chưa có code đăng nhập, hãy chọn người đọc Tarot cho bạn ở dưới để đặt lịch hẹn.'}
        <br />
        {'Sau khi book lịch xong, bạn sẽ nhận được mã đặt chỗ.'}
      </Text>
    </VStack>
  );

  return (
    <VStack marginX={[6, 12]}>
      {LoginForm}

      <HStack spacing="64px">
        {readers.map((reader) => {
          return (
            <Card maxW="sm" onClick={() => selectReader(reader)}>
              <CardBody>
                <Image
                  src={reader.cardImg}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
              </CardBody>

              <CardFooter>
                <Avatar name={reader.name} src={reader.avatarImg} />
                <Box>
                  <Heading size="sm">{reader.name}</Heading>
                  <Text>{reader.description}</Text>
                </Box>
              </CardFooter>
            </Card>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default React.memo(HomePage);

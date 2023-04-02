import React, { FC, useContext, useState } from 'react';
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  FormLabel,
  Highlight,
  HStack,
  Input,
  Select,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import { Agenda, agenda, Gender } from '../data/meta';
import { Reader } from '../types/Reader';
import GlobalContext from './GlobalContext';
import ActionButtons from '../components/ActionButtons';

interface Props {
  reader: Reader;
}

const BookingPage: FC<Props> = () => {
  const { reader, dispatch } = useContext(GlobalContext);
  const [session, setSession] = useState('');

  const renderSelectedSession = () => {
    if (!session) {
      return null;
    }
    return (
      <Highlight query={session} styles={{ px: '1', py: '1', bg: 'orange.100' }}>
        {`Khung giờ đã chọn ${session}`}
      </Highlight>
    );
  };

  const confirmBooking = () => {
    if (!session) {
      return alert('Hãy chọn khung giờ trước');
    }
  };

  return (
    <VStack width={'100%'} height={[1000, 1200]}>
      <Card backgroundColor="white" color="blackAlpha.700" paddingX={[8, 16]} paddingY={[8, 12]}>
        <Text></Text>
        <FormControl>
          <FormLabel>Tên gọi của bạn</FormLabel>
          <Input type="text" isRequired />

          <Select placeholder="Giới tính" paddingTop={[4, 8]} isRequired>
            {Object.keys(Gender).map((gender) => {
              return <option value={gender}>{Gender[gender]}</option>;
            })}
          </Select>

          <FormLabel paddingTop={[4, 8]}>Ngày sinh</FormLabel>
          <Input type="date" min="1940-01-01" max="2018-12-31" isRequired />

          <FormLabel paddingTop={[4, 8]}>SĐT</FormLabel>
          <Input type="tel" />
          <FormHelperText>Chỉ dùng khi cần liên lạc</FormHelperText>
        </FormControl>
      </Card>

      <Text lineHeight="tall" padding={[4, 8]}>
        <Highlight query={reader.name} styles={{ px: '1', py: '1', bg: 'orange.100' }}>
          {`Bạn sẽ được đọc Tarot với ${reader.name}`}
        </Highlight>
        <br />
        {'Hãy điền thông tin liên hệ và chọn khung giờ bên dưới để đặt lịch hẹn.'}
        <br />
        {renderSelectedSession()}
      </Text>

      <BookSession setSession={setSession} />

      <ActionButtons title="XÁC NHẬN" onSubmit={confirmBooking} />
    </VStack>
  );
};

export const BookSession = ({ setSession }) => {
  const daysOfWeek = Object.keys(agenda);
  const selectSession = (day: string, session) => {
    setSession(day + ' lúc ' + session.startAt + ':00');
  };
  return (
    <VStack alignItems="flex-start" width="100%" overflowX="scroll">
      {daysOfWeek.map((day, index) => {
        const sessions = agenda[day];
        return (
          <HStack paddingX={[4, 12]}>
            <Text width={[8, 12]}>{Agenda.DaysOfWeek[day]}</Text>
            {sessions.map((session) => {
              return (
                <Tooltip
                  label={session.isBooked ? 'Đã có người đặt' : 'Còn trống'}
                  placement="bottom"
                >
                  <Button
                    onClick={() => selectSession(day, session)}
                    colorScheme={session.isBooked ? 'red' : 'blue'}
                    isDisabled={session.isBooked}
                    variant={'outline'}
                  >
                    {session.startAt + ':00'}
                  </Button>
                </Tooltip>
              );
            })}
            )
          </HStack>
        );
      })}
    </VStack>
  );
};

export default React.memo(BookingPage);

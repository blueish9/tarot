import React, { FC, useContext } from 'react';
import GlobalContext from '../pages/GlobalContext';
import { Button, Circle, CloseButton } from '@chakra-ui/react';
import HomePage from '../pages/HomePage';

type Props = {
  onSubmit: () => any;
  title: string;
};

const ActionButtons: FC<Props> = ({ title, onSubmit }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <>
      <Circle
        onClick={() => dispatch({ Page: HomePage })}
        size="40px"
        bg="cyan"
        color="white"
        position="fixed"
        top={[4, 8]}
        left={[4, 8]}
      >
        <CloseButton size="lg" color="black" />
      </Circle>

      <Button
        onClick={onSubmit}
        colorScheme="teal"
        size="lg"
        width={['90%', '50%']}
        position="fixed"
        bottom={[16, 18]}
      >
        {title}
      </Button>
    </>
  );
};

export default React.memo(ActionButtons);

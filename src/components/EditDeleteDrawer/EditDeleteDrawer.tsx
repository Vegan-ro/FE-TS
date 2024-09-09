import { Button } from '@chakra-ui/react';
import CustomDrawer from '../Drawer/Drawer';
import { Container } from './EditDeleteDrawer.styles';
import { EditDeleteDrawerProps } from './EditDeleteDrawer.types';

function EditDeleteDrawer({ isOpen, onClose }: EditDeleteDrawerProps) {
  const EditDeleteContainer = () => {
    return (
      <Container>
        <Button width="100%" height="60px" size="lg" colorScheme="white" color="black" fontSize="18px">
          수정
        </Button>
        <Button width="100%" height="60px" size="lg" colorScheme="white" color="black" fontSize="18px">
          삭제
        </Button>
      </Container>
    );
  };
  return <CustomDrawer size="xl" content={<EditDeleteContainer />} isOpen={isOpen} onClose={onClose} width="100%" />;
}

export default EditDeleteDrawer;

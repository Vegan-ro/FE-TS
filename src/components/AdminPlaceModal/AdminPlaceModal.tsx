import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { btnStyles } from './AdminPlaceModal.styles';
import { AdminPlaceModalProps } from './AdminPlaceModal.types';
import AdminPlaceDetail from '../AdminPlaceDetail/AdminPlaceDetail';

function AdminPlaceModal({ placeDetail }: AdminPlaceModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRegistration = async () => {
    // try {
    //   await createPlace(placeData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <>
      <Button onClick={onOpen}>상세 정보</Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered={false}>
        <ModalContent>
          <ModalHeader>{placeDetail.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AdminPlaceDetail placeDetail={placeDetail} />
          </ModalBody>

          <ModalFooter>
            <Button sx={btnStyles} onClick={handleRegistration}>
              등록
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminPlaceModal;

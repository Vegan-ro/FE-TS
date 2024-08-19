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
import { btnStyles, modalStyles } from './AdminPlaceModal.styles';
import { AdminPlaceModalProps } from './AdminPlaceModal.types';
import AdminPlaceDetail from '../AdminPlaceDetail/AdminPlaceDetail';

function AdminPlaceModal({ placeDetail, tab }: AdminPlaceModalProps) {
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
        <ModalContent sx={modalStyles}>
          <ModalHeader>{placeDetail.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AdminPlaceDetail placeDetail={placeDetail} />
          </ModalBody>

          <ModalFooter>
            {tab == 'add' ? (
              <Button sx={btnStyles} onClick={handleRegistration}>
                등록
              </Button>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminPlaceModal;

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
import { createPlace, deleteReportedPlace } from '@/api/adminAPI/adminAPI';

function AdminPlaceModal({ placeDetail, tab }: AdminPlaceModalProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user_id, _id, ...createPlaceData } = placeDetail;

  const handleRegistration = async () => {
    try {
      await createPlace(createPlaceData);
      await deleteReportedPlace(_id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>상세 정보</Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} isCentered={false}>
        <ModalContent sx={modalStyles}>
          <ModalHeader>
            {tab == 'reported' ? `${placeDetail.name}${user_id ? ` (${user_id._id})` : ''}` : placeDetail.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AdminPlaceDetail placeDetail={placeDetail} />
          </ModalBody>

          <ModalFooter>
            {tab == 'reported' ? (
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

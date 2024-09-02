import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { ReviewData } from '../AdminReviewTable/AdminReviewTable.types'; // 실제 ReviewData 타입 정의 경로로 수정

interface AdminReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviewDetail: ReviewData | null; // reviewDetail이 null일 수 있으므로 타입에 null 추가
}

const AdminReviewModal: React.FC<AdminReviewModalProps> = ({ isOpen, onClose, reviewDetail }) => {
  if (!reviewDetail) {
    return null; // reviewDetail이 null일 경우 모달을 렌더링하지 않음
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>리뷰 상세정보</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            <strong>식당 이름:</strong> {reviewDetail.place_id?.name || '정보 없음'}
          </div>
          <div>
            <strong>식당 주소:</strong> {reviewDetail.place_id?.address || '정보 없음'}
          </div>
          <div>
            <strong>유저 닉네임:</strong> {reviewDetail.user_id?.nickname || '정보 없음'}
          </div>
          <div>
            <strong>내용:</strong> {reviewDetail.content || '정보 없음'}
          </div>
          <div>
            <strong>작성일:</strong> {new Date(reviewDetail.createdAt).toLocaleDateString() || '정보 없음'}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AdminReviewModal;

import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@chakra-ui/react';
import { UserData } from '../AdminUserTable/AdminUserTable.types';

interface AdminUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userDetail: UserData;
}

function AdminUserModal({ isOpen, onClose, userDetail }: AdminUserModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>유저 상세정보</ModalHeader>
        <ModalBody>
          <p>
            <strong>닉네임:</strong> {userDetail.nickname || '없음'}
          </p>
          <p>
            <strong>이메일:</strong> {userDetail.email || '없음'}
          </p>
          <p>
            <strong>컴플레인 횟수:</strong> {userDetail.complaint || '없음'}
          </p>
          <p>
            <strong>관리자 여부:</strong> {userDetail.is_admin ? '관리자' : '일반 유저'}
          </p>
          <p>
            <strong>전화번호:</strong> {userDetail.phone || '없음'}
          </p>
          <p>
            <strong>태그:</strong> {userDetail.tag || '없음'}
          </p>
          <p>
            <strong>태그 이미지:</strong> <img src={`path/to/images/${userDetail.tag_img}`} alt="태그 이미지" />
          </p>
          <p>
            <strong>가입일:</strong> {new Date(userDetail.createdAt).toLocaleDateString() || '없음'}
          </p>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AdminUserModal;

import { Td, Tr } from '@chakra-ui/react';
import AdminTable from '../AdminTable/AdminTable';
import AdminReviewModal from '../AdminReviewModal/AdminReviewModal';
import { ReviewData } from './AdminReviewTable.types'; // 실제 ReviewData 타입 정의 경로로 수정
import { ButtonWrapper, DataContent, IconWrapper, NoData, NoDataText, thStyles } from './AdminReviewTable.styles';
import { useState } from 'react';

function AdminReviewTable({ reviews }: { reviews: ReviewData[] }) {
  const [selectedReview, setSelectedReview] = useState<ReviewData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const headers = ['식당이름', '유저 닉네임', '내용', '상세 정보'];

  const handleOpenModal = (review: ReviewData) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  return reviews.length === 0 ? (
    <DataContent>
      <NoData>
        <NoDataText>리뷰가 없습니다.</NoDataText>
      </NoData>
    </DataContent>
  ) : (
    <>
      <AdminTable headers={headers}>
        {reviews.map((review) => (
          <Tr key={review._id} sx={thStyles}>
            <Td>{review.place_id?.name || '정보 없음'}</Td>
            <Td>{review.user_id ? review.user_id.nickname : '정보 없음'}</Td>
            <Td>{review.content}</Td>
            <Td>
              <ButtonWrapper>
                <IconWrapper onClick={() => handleOpenModal(review)}>상세정보</IconWrapper>
              </ButtonWrapper>
            </Td>
          </Tr>
        ))}
      </AdminTable>
      {selectedReview && (
        <AdminReviewModal isOpen={isModalOpen} onClose={handleCloseModal} reviewDetail={selectedReview} />
      )}
    </>
  );
}

export default AdminReviewTable;

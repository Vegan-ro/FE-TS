// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetReviews } from '@/utils/hooks/index';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import type { Review } from '@/types/review.types';
import {
  Container,
  ReviewWrapper,
  Header,
  ReviewCount,
  ReviewTitle,
  ReviewNumber,
  WriteReview,
  ReviewContent,
  NoReview,
  NoReviewText,
  LoadMoreButtonContainer,
  LoadMoreButtonText,
  LoadMoreButtonIconContainer,
} from '@/components/Review/Review.styles';
import { IoChevronDownSharp } from 'react-icons/io5';
import { ReviewProps } from './Review.types';
import { Link } from 'react-scroll';
import EditDeleteDrawer from '@/components/EditDeleteDrawer/EditDeleteDrawer';
import { useState } from 'react';

export default function Review({ placeId }: ReviewProps) {
  const navigate = useNavigate();
  const { data: reviews, isLoading, isError, error } = useGetReviews(placeId);
  // const [visibleReviews, setVisibleReviews] = useState<number>(3);
  const [isEditDeleteDrawerOpen, setIsEditDeleteDrawerOpen] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const openEditDeleteDrawer = (review: Review) => {
    setSelectedReview(review);
    setIsEditDeleteDrawerOpen(true);
  };

  return (
    <>
      <Container id="write-review">
        <ReviewWrapper>
          <Header>
            <ReviewCount>
              <ReviewTitle>리뷰</ReviewTitle>
              <ReviewNumber>{reviews?.totalCount}개</ReviewNumber>
            </ReviewCount>
            <Link to="write-review" smooth={true} duration={500}>
              <WriteReview onClick={() => {}}>리뷰 작성</WriteReview>
            </Link>
          </Header>
          {reviews?.reviews.length === 0 ? (
            <ReviewContent>
              <NoReview>
                <NoReviewText>리뷰를 작성해주세요.</NoReviewText>
              </NoReview>
            </ReviewContent>
          ) : (
            <>
              {reviews?.reviews.slice(0, 3).map((review: Review) => (
                <ReviewCard
                  key={review._id}
                  nickname={review.user_id.nickname}
                  veganLevel={review.user_id.tag}
                  comment={review.content}
                  date={review.updatedAt}
                  // userToken={review.user_id.token}
                  onClick={() => openEditDeleteDrawer(review)}
                />
              ))}
              {reviews?.reviews && reviews?.reviews.length > 3 && (
                <LoadMoreButtonContainer
                  onClick={() => {
                    navigate(`/place/${placeId}/review`);
                  }}
                >
                  <LoadMoreButtonText>더보기</LoadMoreButtonText>
                  <LoadMoreButtonIconContainer>
                    <IoChevronDownSharp size="15" />
                  </LoadMoreButtonIconContainer>
                </LoadMoreButtonContainer>
              )}
            </>
          )}
        </ReviewWrapper>
        {selectedReview && (
          <EditDeleteDrawer
            isOpen={isEditDeleteDrawerOpen}
            onClose={() => setIsEditDeleteDrawerOpen(false)}
            // review={selectedReview}
          />
        )}
      </Container>
    </>
  );
}

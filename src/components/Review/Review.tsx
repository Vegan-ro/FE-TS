// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetReviews } from '../../hooks/useReview';
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

export default function Review({ placeId }: ReviewProps) {
  const navigate = useNavigate();
  const { data: reviews, isLoading, isError, error } = useGetReviews(placeId);
  // const [visibleReviews, setVisibleReviews] = useState<number>(3);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
                  click={() => {
                    // setSelectedReviewIndex(review._id);
                    // toggleEditDrawer(review._id);
                  }}
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
      </Container>
    </>
  );
}

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
} from '@/components/Review/Review.styles';
import { Link } from 'react-scroll';
import EditDeleteDrawer from '@/components/EditDeleteDrawer/EditDeleteDrawer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';

export default function Review() {
  const { placeId } = useParams();
  const { data: reviews, isLoading, isError, error } = useGetReviews(placeId ?? '');
  // const [visibleReviews, setVisibleReviews] = useState<number>(3);
  const [isEditDeleteDrawerOpen, setIsEditDeleteDrawerOpen] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  console.log(reviews);

  const openEditDeleteDrawer = (review: Review) => {
    setSelectedReview(review);
    setIsEditDeleteDrawerOpen(true);
  };

  return (
    <>
      <Navbar title={`${reviews?.reviews[0].place_id?.name} 리뷰`} icon="null" />
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
              {reviews?.reviews.map((review: Review) => (
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

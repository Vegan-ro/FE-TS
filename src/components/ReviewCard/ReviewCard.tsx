import {
  CommentContainer,
  CommentHeader,
  CommentInfo,
  CommentTitle,
  CommentTag,
  TagText,
  IconContainer,
  IconDot,
  CommentDate,
  CommentText,
} from './Reveiw.styles';
import { ReviewProps } from './Review.types';

function ReviewCard({ click, nickname, veganLevel, comment, date }: ReviewProps) {
  const formattedDate = new Date(date).toLocaleString('ko-KR', { hour: '2-digit', minute: '2-digit' });
  return (
    <>
      <CommentContainer>
        <CommentHeader>
          <CommentInfo>
            <CommentTitle>{nickname}</CommentTitle>
            <CommentTag>
              <TagText>{veganLevel}</TagText>
            </CommentTag>
          </CommentInfo>
          <IconContainer onClick={click}>
            <IconDot top={6.5} />
            <IconDot top={11.5} />
            <IconDot top={1.5} />
          </IconContainer>
        </CommentHeader>
        <CommentDate>{formattedDate}</CommentDate>
        <CommentText>{comment}</CommentText>
      </CommentContainer>
    </>
  );
}

export default ReviewCard;

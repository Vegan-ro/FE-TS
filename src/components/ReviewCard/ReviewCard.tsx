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
} from './ReveiwCard.styles';
import { ReviewCardProps } from './ReviewCard.types';

function ReviewCard({ onClick, nickname, veganLevel, comment, date }: ReviewCardProps) {
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
          <IconContainer onClick={onClick}>
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

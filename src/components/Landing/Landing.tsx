import { Wrapper, Link, TextBox, TopText, BodyText, BottomText } from './Landing.styles';

const Landing = () => {
  return (
    <Wrapper>
      <Link href="https://github.com/Vegan-ro/FE-TS" target="_blank" />
      <TextBox>
        <TopText>
          한 발자국 더 <b>건강한 길로</b>
        </TopText>
        <BodyText>내 주변 채식 맛집</BodyText>
        <BottomText>
          <small>바로</small>한 눈에
        </BottomText>
      </TextBox>
    </Wrapper>
  );
};

export default Landing;

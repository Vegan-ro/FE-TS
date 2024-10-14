import styled from '@emotion/styled';
import SmallRoundButton from '@/components/SmallRoundButton/SmallRoundButton';
import RoundButton from '@/components/RoundButton/RoundButton';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.colors.beige[100]};
  overflow: hidden;
`;
export const TopBar = styled.div`
  width: 100%;
  padding: 0 16px;
  position: absolute;
  top: 16px;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const FilterBar = styled.div`
  width: 100%;
  ${(props) => props.theme.flex.row('space-between', 'center')}
`;
export const FilterButton = styled(SmallRoundButton)`
  position: relative;
`;
export const FilterContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  top: 98px;
  left: 0;
  z-index: 9;
`;
export const Categories = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const Pin = styled.div`
  padding: 12px;
  background-color: white;
  color: 'red';
`;
export const BottomBar = styled.div`
  width: 100%;
  position: absolute;
  bottom: 16px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 999;
`;
export const RelocateButton = styled(RoundButton)`
  &.relocate-button {
  }
`;

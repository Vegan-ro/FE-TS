import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 12px;
  padding: 16px 12px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.colors.gray[100]};
  background: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;
export const PlaceName = styled.div`
  overflow: hidden;
  color: ${(props) => props.theme.colors.gray[800]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 600;
  ${(props) => props.theme.viewPoint.desktop`
    font-size: 18px;
    margin-right: 8px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    font-size: 14px;
    margin-right: 6px;
  `}
`;
export const VeganMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 5px;
  gap: 10px;
  border-radius: 4px;
  background: rgba(79, 131, 55, 0.1);
  color: ${(props) => props.theme.colors.green[500]};
  font-size: 12px;
  font-weight: 600;
  ${(props) => props.theme.viewPoint.desktop`
    margin-left: 0;
  `}
  ${(props) => props.theme.viewPoint.tablet`
    margin-left: 6px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    margin-left: 0;
    font-size: 11px;
  `}
`;

export const DistBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Distance = styled.div`
  color: ${(props) => props.theme.colors.gray[600]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.viewPoint.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    font-size: 12px;
  `}
`;
export const Address = styled.p`
  color: ${(props) => props.theme.colors.gray[700]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.viewPoint.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    font-size: 12px;
  `}
`;
export const Tel = styled.p`
  color: ${(props) => props.theme.colors.gray[700]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  ${(props) => props.theme.viewPoint.desktop`
    font-size: 14px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    font-size: 12px;
  `}
`;
export const CategoryIcon = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  ${(props) => props.theme.viewPoint.desktop`
    width: 54px;
    height: 54px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    width: 44px;
    height: 44px;
  `}
`;

export const CategoryImg = styled.img`
  object-fit: cover;
  ${(props) => props.theme.viewPoint.desktop`
    width: 54px;
    height: 54px;
  `}
  ${(props) => props.theme.viewPoint.tablet`
    width: 54px;
    height: 54px;
  `}
  ${(props) => props.theme.viewPoint.mobile`
    width: 44px;
    height: 44px;
  `}
`;

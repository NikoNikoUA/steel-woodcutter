import styled from "styled-components";

export const Img = styled.img`
  border-radius: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

export const CardDescr = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  &:nth-child(-n + 3) {
    margin-bottom: 40px;
  }
`;

export const Names = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const PersonDescr = styled.p`
  font-size: 20px;
  text-align: center;
  width: 500px;
`;

export const DescrContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

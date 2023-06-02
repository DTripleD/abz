import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 140px;
`;

export const GetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`;

export const Item = styled.li`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  display: flex;
  gap: 20px;
`;

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
`;

export const SeeMoreButton = styled.button`
  margin-left: auto;
  margin-right: auto;

  width: 120px;
`;

export const UserInfo = styled.p`
  color: #000000;
  text-align: center;
`;

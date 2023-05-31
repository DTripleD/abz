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
  background: #f4e041;
  border-radius: 80px;
  border: none;
  width: 100px;
  cursor: pointer;

  margin: 0;
  padding: 0;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserInfo = styled.p`
  color: #000000;
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
`;

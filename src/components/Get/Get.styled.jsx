import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 140px;
  padding-bottom: 140px;
`;

export const GetWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: space-between;
`;

export const Item = styled.li`
  height: 254px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 360px;
`;

export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin-left: 150px;
  margin-right: 150px;
`;

export const SeeMoreButton = styled.button`
  background: #f4e041;
  border-radius: 80px;
  border: none;
  width: 100px;

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

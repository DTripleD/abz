import { useEffect, useState } from 'react';
import {
  Section,
  GetWrapper,
  Title,
  List,
  Item,
  Avatar,
  SeeMoreButton,
  UserInfo,
} from './Get.styled';

const Get = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isSeeMore, setIsSeeMore] = useState(false);

  useEffect(() => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then(res => res.json())
      .then(data => {
        if (!data.users) {
          throw new Error('Nothing found for your request');
        }
        setIsSeeMore(() => page < Math.ceil(data.total_users / 6));

        if (page === 1) {
          setUsers(data.users);
          return;
        }

        setUsers(prevState => [...prevState, ...data.users]);
      })
      .catch(error => console.log(error));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Section id="get">
      <GetWrapper className="post__form ">
        <Title>Working with GET request</Title>
        <List className="get__list">
          {users
            .sort(user => user.registration_timestamp)
            .map(user => {
              return (
                <Item key={user.id} className="get__item">
                  <Avatar src={user.photo} alt={user.name} />
                  <UserInfo>{user.name}</UserInfo>
                  <div>
                    <UserInfo>{user.position}</UserInfo>
                    <UserInfo>{user.email}</UserInfo>
                    <UserInfo>{user.phone}</UserInfo>
                  </div>
                </Item>
              );
            })}
        </List>
        {isSeeMore && (
          <SeeMoreButton type="button" onClick={onLoadMore}>
            Show more
          </SeeMoreButton>
        )}
      </GetWrapper>
    </Section>
  );
};

export default Get;

import { useEffect, useState } from 'react';
import css from './Get.module.css';

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
        console.log(data);
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
    <div className={css.getWrapper}>
      <h2 className={css.getTitle}>Working with GET request</h2>
      <ul className={css.getList}>
        {users
          .sort(user => user.registration_timestamp)
          .map(user => {
            return (
              <li key={user.id} className={css.getItem}>
                <img
                  src={user.photo}
                  alt={user.name}
                  className={css.getImage}
                />
                <p>{user.name}</p>
                <p>{user.position}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </li>
            );
          })}
      </ul>
      {isSeeMore && (
        <button
          type="button"
          className={css.buttonSeeMore}
          onClick={onLoadMore}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default Get;

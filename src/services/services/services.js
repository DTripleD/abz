const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = page => {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  ).then(res => res.json());
};

export const getToken = () => {
  return fetch(`${baseURL}/token`).then(response => response.json());
};

export const registerUser = (data, token) => {
  return fetch(`${baseURL}/users`, {
    method: 'POST',
    body: data,
    headers: { Token: token },
  }).then(response => response.json());
};

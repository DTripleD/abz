const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export const getUsers = count => {
  return fetch(`${baseURL}users?page=1&count=${count}`).then(
    response => response.data
  );
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

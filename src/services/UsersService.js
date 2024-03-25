import { numberOfEntriesOptions } from "../data/dataTableControls";
import api from "./base";

async function getUsers(pageSize = numberOfEntriesOptions[0], currentPage = 1) {
  let response = await api.get(`users`);
  let numberOfPages = Math.ceil(response.data.total / pageSize);

  let isCurrentPageExceeded = currentPage >= numberOfPages;

  response = await api.get(
    `users?limit=${pageSize}&skip=${
      isCurrentPageExceeded ? 0 : pageSize * (currentPage - 1)
    }`
  );
  const users = response.data.users.map((user) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    maidenName: user.maidenName,
    age: user.age,
    gender: user.gender,
    email: user.email,
    username: user.username,
    bloodGroup: user.bloodGroup,
    eyeColor: user.eyeColor,
    birthDate: user.birthDate,
  }));
  return {
    data: users,
    total: response.data.total,
    isCurrentPageExceeded: isCurrentPageExceeded,
  };
}

async function getUsersBy(
  pageSize = numberOfEntriesOptions[0],
  currentPage = 1,
  key = "",
  value = ""
) {
  let response = await api.get(`users/filter?key=${key}&value=${value}`);
  let numberOfPages = Math.ceil(response.data.total / pageSize);

  let isCurrentPageExceeded = currentPage >= numberOfPages;

  response = await api.get(
    `users/filter?limit=${pageSize}&skip=${
      isCurrentPageExceeded ? 0 : pageSize * (currentPage - 1)
    }&key=${key}&value=${value}`
  );
  const users = response.data.users.map((user) => ({
    firstName: user.firstName,
    lastName: user.lastName,
    maidenName: user.maidenName,
    age: user.age,
    gender: user.gender,
    email: user.email,
    username: user.username,
    bloodGroup: user.bloodGroup,
    eyeColor: user.eyeColor,
    birthDate: user.birthDate,
  }));
  return {
    data: users,
    total: response.data.total,
    isCurrentPageExceeded: isCurrentPageExceeded,
  };
}

async function getUsersCount() {
  let response = await api.get(`users`);
  return response.data.total;
}

export { getUsers, getUsersCount, getUsersBy };

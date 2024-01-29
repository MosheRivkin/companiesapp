import axios from "axios";

export const getData = (quantity) =>
  axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${quantity}`);

import http from "../http-common";

const getAll = () => {
  return http.get("/Contribuinte");
};

const get = (id) => {
  return http.get(`/Contribuinte/${id}`);
};

export default {
  getAll,
  get,
};

import http from "../http-common";

const getAll = () => {
  return http.get("/CalculoIR");
};

const get = (id) => {
  return http.get(`/CalculoIR/${id}`);
};

const calcular = (data) => {
  return http.post("/CalculadorIR", data);
};

export default {
  getAll,
  get,
  calcular,
};

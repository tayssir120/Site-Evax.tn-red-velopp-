import Axios from "axios";

export const addJPO = async (JPO) => {
  const res = await Axios.post("http://localhost:5000/JPO/add", JPO);
  console.log(res);
  return res.data.response;
};
export const updateJPO = async (id, updatedData) => {
  const res = await Axios.post(
    "http://localhost:5000/JPO/update/" + id,
    updatedData
  );
  console.log(res);
  return res.data;
};
export const deleteJPO = async (id) => {
  const res = await Axios.get(
    "http://localhost:5000/JPO/delete/" + id
  );
  console.log(res);
  return res.data;
};

export const fetchJPOs = async () => {
  const res = await Axios.get("http://localhost:5000/JPO/list");
  return res.data;
};
export const fetchJPOById = async (id) => {
  const res = await Axios.get(`http://localhost:5000/JPO/get?id=${id}`);
  return res.data.response;
};

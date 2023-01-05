import Axios from "axios";

export const addVolunteer = async (volunteer) => {
  const res = await Axios.post(
    "http://localhost:5000/volunteer/add",
    volunteer
  );
  console.log(res);
  return res.data;
};
export const updateVolunteer = async (id, updatedData) => {
  const res = await Axios.post(
    "http://localhost:5000/volunteer/update/" + id,
    updatedData
  );
  console.log(res);
  return res.data;
};
export const deleteVolunteer = async (id) => {
  const res = await Axios.get(
    "http://localhost:5000/volunteer/delete/" + id
  );
  console.log(res);
  return res.data.response;
};

export const fetchVolunteers = async () => {
  const res = await Axios.get("http://localhost:5000/volunteer/list");
  return res.data;
};
export const fetchVolunteerById = async (id) => {
  const res = await Axios.get(`http://localhost:5000/volunteer/get?id=${id}`);
  return res.data.response;
};

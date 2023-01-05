import Axios from "axios";

export const getAllVaccines = async () => {
  const result = await Axios.get(
    "http://localhost:5000/vaccine/getAllVaccines"
  );
  //console.log(result);
  return result.data;
};

export const getVaccineById = async (id) => {
  const result = await Axios.get(
    `http://localhost:5000/vaccine/getVaccineByid/${id}`
  );
  console.log(result);
  return result.data;
};

export const addVaccine = async (vaccine) => {
  const res = await Axios.post(
    "http://localhost:5000/vaccine/addVaccine",
    vaccine
  );
  console.log(res);
  return res.data;
};
export const updateVaccine = async (id, newQuantity) => {
  const res = await Axios.post(
    `http://localhost:5000/vaccine/updateVaccineQuantity/${id}`,
    newQuantity
  );
  console.log(res);
  return res.data;
};

export const deleteVaccine = async (id) => {
  const result = await Axios.get(
    "http://localhost:5000/vaccine/delete/" + id
  );

  return result.data;
};


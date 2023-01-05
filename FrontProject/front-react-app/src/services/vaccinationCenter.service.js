import Axios from "axios";

export const updateVaccinationCenter = async (id, data) => {
  const result = await Axios.post(
    "http://localhost:5000/vaccinationCenter/update/" + id,
    data
  );

  return result.data;
};

export const withoutAppointment = async () => {
  const res = await Axios.get(
    "http://localhost:5000/vaccine/withoutAppointment"
  );
  
  return res.data;
};


export const addVaccinationCenter = async (data) => {
  const result = await Axios.post(
    "http://localhost:5000/vaccinationCenter/add/",
    data
  );

  return result.data;
};

export const deleteVaccinationCenter = async (id) => {
  const result = await Axios.get(
    "http://localhost:5000/vaccinationCenter/delete/" + id
  );

  return result.data;
};

export const listVaccinationCenter = async () => {
  const result = await Axios.get(
    "http://localhost:5000/vaccinationCenter/list/"
  );

  return result.data;
};

export const getVaccinationCenter = async (id) => {
  const result = await Axios.get(
    "http://localhost:5000/vaccinationCenter/get/" + id
  );

  return result.data;
};

export const assignVaccineToCenter = async (NCenter, NVaccine, vquantity) => {
  const res = await Axios.post(
    "http://localhost:5000/vaccine/assignVaccineCenter",
    NCenter,
    NVaccine,
    vquantity
  );
  console.log(res);
  return res.data;
};

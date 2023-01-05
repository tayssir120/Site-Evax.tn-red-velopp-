import Axios from "axios";

export const sendCodeLoginEvax = async (code) => {
  const result = Axios.post("http://localhost:5000/citizen/EvaxLogin", code);
  console.log(result);
  return result;
};


export const getCitizenByCode = async (code) => {
  const result = await Axios.get(`http://localhost:5000/citizen/get/${code}`
  );
  return result.data;
};



export const getDataWithRightCode = async (code,InputedCode) => {
  const result = await Axios.post(
    `http://localhost:5000/citizen/getDataWithRightCode/${code}`,
    InputedCode
  );
  console.log(result);
  return result;
};


export const sendCode = async (email) => {
  const result = Axios.post("http://localhost:5000/citizen/sendCode", email);
  console.log(result);
  return result.data;
};

export const verifCode = async (code) => {
  const result = Axios.post("http://localhost:5000/citizen/verifCode", code);
  console.log(result);
  console.log("sended code:", code)
  return result;
};

export const addCin = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/addCin",
    citizen
  );
  console.log(result);
  return result;
};

export const addOnPharmacy = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/addOnPharmacy",
    citizen
  );
  //console.log(result.data);
  return result;
}

export const addWithoutCin = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/addNoCin",
    citizen
  );
  console.log(result);
  return result.data.response;
};

export const addForeign = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/addForeign",
    citizen
  );
  console.log(result);
  return result.data.response;
};

export const countAll = async () => {
  const result = await Axios.get("http://localhost:5000/citizen/countAll");
  //console.log(result);
  return result;
};

export const countDose1 = async () => {
  const result = await Axios.get("http://localhost:5000/citizen/countDose1");
  //console.log(result);
  return result;
};

export const countDose2 = async () => {
  const result = await Axios.get("http://localhost:5000/citizen/countDose2");
  //console.log(result);
  return result;
};

export const getAllCitizen = async () => {
  const result = await Axios.get("http://localhost:5000/citizen/get-all");
  console.log(result);
  return result.data.response;
};

export const getById = async (id) => {
  const result = await Axios.get("http://localhost:5000/citizen/get?id=" + id);
  console.log(result);
  return result.data.response;
};


export const editCitizenWithCin = async (code, newData) => {

  const result = await Axios.post(
    `http://localhost:5000/citizen/editCIN/${code}`,
    newData
  );
  console.log(result);
  return result.data;
};

export const editCitizenWithoutCin = async (id, newData) => {
  const result = await Axios.post(
    `http://localhost:5000/citizen/editNOCIN?id=${id}`,
    newData
  );
  console.log(result);
  return result.data.response;
};

export const editForeignCitizen = async (id, newData) => {
  const result = await Axios.post(
    `http://localhost:5000/citizen/editFOREIGN?id=${id}`,
    newData
  );
  console.log(result);
  return result.data.response;
};

export const updateCitizenFirstStep = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/updateFirstStep",
    citizen
  );
  //console.log(result);
  return result.data.response;
};
export const updateCitizen = async (code, updatedData) => {
  const result = await Axios.post(
    `http://localhost:5000/citizen/update/${code}`,
    updatedData
  );
  //console.log(result);
  return result.data.response;
};

export const reportAppointment = async (citizen) => {
  const result = await Axios.post(
    "http://localhost:5000/citizen/report",
    citizen
  );
  console.log(result);
  return result.data.response;
};

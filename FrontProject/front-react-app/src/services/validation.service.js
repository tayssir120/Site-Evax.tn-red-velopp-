import Axios from "axios";

export const Verification = async (data) => {
  const result = await Axios.get(
    "http://localhost:5000/validation/verification",
    data
  );

  return result.data;
};

export const fixe = async (data) => {
  const result = await Axios.post(
    "http://localhost:5000/validation/fixe",
    data
  );

  return result.data;
};

export const mobile = async (data) => {
  const result = await Axios.post(
    "http://localhost:5000/validation/mobile",
    data
  );

  return result.data;
};

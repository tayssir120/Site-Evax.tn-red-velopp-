import Axios from "axios"
export const connect = async (validator) => {
  
    const result = await Axios.post(
      "http://localhost:5000/validation/connect",validator
    )
    
    return result.data
}
export const register = async (validator) => {
    const result = await Axios.post(
      "http://localhost:5000/validation/register",validator
    )
    
    return result.data
}
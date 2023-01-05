import Axios from "axios"

export const diabeticVaccinatedNumber = async (citizen) => {
    const result = await Axios.get(
      "http://localhost:5000/dashboard/diabetic_vaccinated_number"
    )
    
    return result.data
}
export const bloodPressureVaccinatedNumber = async (citizen) => {
    const result = await Axios.get(
      "http://localhost:5000/dashboard/bloodPressure_vaccinated_number"
    )
    
    return result.data
}

export const chronicKidneyDiseaseVaccinatedNumber = async (citizen) => {
    const result = await Axios.get(
      "http://localhost:5000/dashboard/chronicKidneyDisease_vaccinated_number"
    )
    
    return result.data
}


export const congestiveHeartFailureVaccinatedNumber = async (citizen) => {
    const result = await Axios.get(
      "http://localhost:5000/dashboard/congestiveHeartFailure_vaccinated_number"
    )
    
    return result.data
}

export const VaccinatedNumber = async (citizen) => {
    const result = await Axios.get(
      "http://localhost:5000/dashboard/VaccinatedNumber"
    )
    
    return result.data
}

export const connectAdmin = async (data) => {
  const result = await Axios.post(
    "http://localhost:5000/dashboard/admin/login",data
  )
  
  return result.data
}
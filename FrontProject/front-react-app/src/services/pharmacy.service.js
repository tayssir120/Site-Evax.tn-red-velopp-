import Axios from "axios"

export const updatePharmacy = async (id,data) => {
    const result = await Axios.post(
      "http://localhost:5000/pharmacy/update/"+id,data
    )
    
    return result.data
}

export const addPharmacy = async (data) => {
    const result = await Axios.post(
      "http://localhost:5000/pharmacy/add/",data
    )
    
    return result.data
}

export const deletePharmacy = async (id) => {
    const result = await Axios.get(
      "http://localhost:5000/pharmacy/delete/"+id
    )
    
    return result.data
}

export const listPharmacy = async () => {
    const result = await Axios.get(
      "http://localhost:5000/pharmacy/list/"
    )
    
    return result.data
}

export const getPharmacy = async (id) => {
    const result = await Axios.get(
      "http://localhost:5000/pharmacy/get/"+id
    )
    
    return result.data
}

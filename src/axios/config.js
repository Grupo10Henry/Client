import axios from "axios"

export const instance = axios.create({
  baseURL: "http://localhost:3001",
})

export const getEvents = async () => {
  try {
    const { data } = await instance.get("/event")
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

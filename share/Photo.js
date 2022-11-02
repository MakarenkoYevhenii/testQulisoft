import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});
const id = "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9";
export const allphoto = async () => {
  try {
    const data = instance.get(`/photos/?client_id=${id}`);
    return (await data).data;
  } catch (error) {
    return error;
  }
};

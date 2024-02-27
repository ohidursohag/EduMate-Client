import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosPublic = () => {
  return instance;
};
axios;

export default useAxiosPublic;

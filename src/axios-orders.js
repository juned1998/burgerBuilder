import axios from "axios";
import { firebaseURL } from "../config/firebaseURL";

const instance = axios.create({
    baseURL: firebaseURL,
});

export default instance;

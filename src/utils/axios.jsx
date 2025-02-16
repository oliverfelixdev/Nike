import axios from "axios";

const instance = axios.create(); // No need for 'url' in the config

export default instance;

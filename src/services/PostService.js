import axios from 'axios';
import Config from '../config/Config';

export default {
  getPosts() {
    return axios.get(Config.APIURL)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch(err => console.log(err));
  },
};

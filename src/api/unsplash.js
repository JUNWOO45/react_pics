import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2ueimYjcSkYnndzb6sIf5UlMKW6muEq_qnKihB-mQdY'
  }
});

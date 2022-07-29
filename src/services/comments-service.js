import axios from 'axios';

const commentsApiClient = axios.create({
  baseURL: 'http://sdvsdvsdvsd.com/api/',
});

commentsApiClient.get();

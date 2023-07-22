import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_CvxAa29WExr1bTiMOsXFsBhl99tltIAOAfVfK2nyc2OM5oPRRSOgtFaOBRJ4yNS3';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const BASE_URL = 'https://api.thecatapi.com/';

const customConfig = {
  baseURL: BASE_URL,
};

const instance = axios.create(customConfig);

export function fetchBreeds() {
  return instance.get('v1/breeds').then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }

    return resp.data;
  });
}

export function fetchCatByBreed(idCat) {
  return instance.get(`v1/images/search?breed_ids=${idCat}`).then(resp => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.data[0].url;
  });
}
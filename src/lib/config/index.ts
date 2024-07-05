
const baseURL = process.env.REACT_APP_BASE_URL
const jwt = process.env.REACT_APP_TMDB_TOKEN
const config = {
  api: {
    baseURL,
    timeout: 25000,
    headers: {
    accept: 'application/json',
    Authorization: `Bearer ${jwt}`
  }
  },
};

export default config
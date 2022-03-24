const axios = require("axios");

const apiCallers = {
  getListData: async (url) => {
    const res = await axios.get(url);
    return res.data.results;
  },
  getCastList: async (mediaType, id) => {
    const res = await axios.get(`${process.env.BASE_URL}/${mediaType}/${id}/credits?api_key=${process.env.API_KEY}`);
    return res.data;
  },
  getDetailData: async (mediaType, id) => {
    const res = await axios.get(`${process.env.BASE_URL}/${mediaType}/${id}?api_key=${process.env.API_KEY}`);
    return res.data;
  },
  getSimilarData: async (mediaType, id) => {
    const res = await axios.get(`${process.env.BASE_URL}/${mediaType}/${id}/similar?api_key=${process.env.API_KEY}`);
    return res.data.results;
  },
};

module.exports = apiCallers;

import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "4a15b262f51744a6ae197ce1087276fd:0:74623931&q=";

export default {
  search: function (query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  saveArticle: function (articleObject) {
    return axios.post('/saveArticle', articleObject);
  },
  getSavedArticles: function () {
    return axios.get('/getSavedArticles');
  },
  deleteSavedArticle: function (id) {
    return axios.delete('/deleteSavedArticle', {
      data: {
        articleId: id
      }
    })
  }

};
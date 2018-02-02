/////////////////////////////////////////////// /* Import Stock React Components */ ////////////////////////////////////////////////////////
import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ ////////////////////////////////////////////////////////
import SearchForm from "../../components/SearchForm";
import Results from "../../components/Results";
import API from "../../utils/API";

class Home extends Component {

  constructor(){
    super();
    this.state = {
      articles : []
    };

    this.newQuery = this.newQuery.bind(this);
    this.searchArticles = this.searchArticles.bind(this);
  }

  newQuery({searchParams}){

    // console.log(JSON.stringify(searchParams));
    let {topic, startDate, endDate} = searchParams;
    let queryString = `${topic}${startDate}${endDate}`;
    this.searchArticles(queryString);
  }

  searchArticles = query => {
    API.search(query).then(res => {
    let articlesArray = [];

    res.data.response.docs.map(({snippet, web_url, pub_date, _id}) => {
        articlesArray.push({title: snippet, url: web_url, date: pub_date, articleId: _id });
      });

    this.setState(prevState => ({
      articles: [...prevState].concat(articlesArray)
    }))

    // console.log("state is " + JSON.stringify(this.state));
  }).catch(err => console.log(err));
  };
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  //

  render() {
    // console.log("New is " + JSON.stringify(this.state))
    return (
    <React.Fragment>

      <SearchForm newQuery={this.newQuery}/>
      <Results results={this.state}/>
    </React.Fragment>
    )
  } // End of Render
} // End of Class

export default Home;

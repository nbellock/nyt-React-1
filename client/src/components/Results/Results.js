/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////
import React, {Component} from "react";

/////////////////////////////////////////////// /* Components */ //////////////////////////////////////////////////////////
import IndividualResult from "../IndividualResult"

/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////////////
export default class Results extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     results : props.results
  //   };
  // }

  render() {

    let articleResults = [];

    if( this.props.results.articles.length > 0 ){

    //   // console.log("lalalal is " + JSON.stringify(this.props.results))
      articleResults = this.props.results.articles.map(article => {

        return(
          <ol>
            <IndividualResult title={article.title} url={article.url} date={article.date} id={article.articleId}/>
          </ol>
        )
      });

    }

    return articleResults; // End of Return
  } // End of Render
} // End of Class

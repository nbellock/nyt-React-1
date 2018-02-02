/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////
import React, {Component} from "react";

/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////////////
export default class IndividualResult extends Component {

  render() {
    return (

      <li>
        <strong>Title: {this.props.title} URL: {this.props.url} Date:{this.props.date}  ID: {this.props.articleId}</strong>
      </li>

    ); // End of Return
  } // End of Render
} // End of Class

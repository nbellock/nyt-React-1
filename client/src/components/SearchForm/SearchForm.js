/////////////////////////////////////////////// /* Imports */ ////////////////////////////////////////////////////////
import React, {Component} from "react";
import API from "../../utils/API";

/////////////////////////////////////////////// /* Class */ ////////////////////////////////////////////////////////
export default class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      searchParams : {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){

      event.preventDefault();
       this.setState({
         searchParams:{
         topic: this.refs.topic.value,
         startDate: this.refs.startYear.value? `&begin_date=${this.refs.startYear.value.replace(/\-/g,"")}` : "",
         endDate: this.refs.endYear.value? `&end_date=${this.refs.endYear.value.replace(/\-/g,"")}` : "",
        }
       }, function(){
           // alert("new state is " + JSON.stringify(this.state));
           this.props.newQuery(this.state); // Send the Query to Home Component
      });
  }


  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h1>Search</h1>
        </div>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <label for="topic">Topic</label>
            <input type="text" ref="topic" id="topic" required/>
            <label for="">Start Year</label>
            <input type="date" ref="startYear" id="startYear"/>
            <label for="">End Year</label>
            <input type="date" ref="endYear" id="endYear"/>
            <input type="submit" value="submit" />
          </form>
        </div>
      </React.Fragment>
      ); // End of Return
  } // End of Render
} // End of Class

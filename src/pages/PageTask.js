import React from "react";
import NavBar from "../components/NavBar";
import img from "../images/check-out.svg";
import img1 from "../images/check-in.svg";
import "../components/styles/Pagestask.css";
import axios from "axios";

const url = "http://localhost:3000/api/todos/";
let newDate = new Date();
let day = newDate.getDate()+'/'+newDate.getMonth()+'/'+newDate.getFullYear();
class PageTask extends React.Component {
  
  state = {
    data: [],
  };
  peticionGet = () => {
 
    axios.get(url).then((response) => {
      this.setState({data: response.data.body});
    });
  };

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div>
        <NavBar />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Created</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody>
            {this.state.data.map(task=>{
              return(
                <tr>
                  <th>
                  {(() => {
        switch (task.completed) {
          case 1:   return <img src={img1} className="checks" />;
          case 0: return <img src={img} className="checks" />;
          default:      return <img src={img} className="checks" />;
        }
      })()}

                  
                  </th>
                  <td>{task.title}</td>
                  <td>{day}</td>
                  <td>{task.name}</td>
                </tr>
              )
            })}      
          </tbody>
        </table>
      </div>
    );
  }
}

export default PageTask;

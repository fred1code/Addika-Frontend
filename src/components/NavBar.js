import React from "react";
import "./styles/Navbar.css";
import ad from '../images/add-enable.svg';

class NavBar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-light containers">
          <div className="item tas">Task</div>
          <div class=" row item time">
            <div class="col-10">
              <input
                className="form-control"
                type="date"
                value="2011-08-19"
                id="example-date-input"
              />
             
            </div>
            <div className="v1"></div>
          </div>
          
          <div className="item">

            <button className="btn">
            <img src={ad} className="im" />
                
                <strong>Add task</strong></button>
          </div>
        </nav>
    );
  }
}

export default NavBar;

import React from "react";
import ad from "../images/add-enable.svg";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./styles/Navbar.css";
import axios from "axios";
const qs = require('qs');

const url = "http://localhost:3000/api/todos/";

class NavBar extends React.Component {
  state = {
    modalInsertar: false,
    form:{
      name:'',
      title:'',
    },
    errors:{},
  };

  modalInsertar = () => {
    this.setState({ modalInsertar: !this.state.modalInsertar });
  };

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }

    peticionPost=async()=>{

      if(!this.state.form.title){
        this.state.errors["name"] = "Required"; 
      }if(this.state.form.title){
     
    let datas = qs.stringify({
      'data': '{ "name":"'+this.state.form.name+'", "title":"'+this.state.form.title+'"}' 
     });
     await axios.post(url, datas).then(response=>{
        this.modalInsertar();
     window.location.reload(true);
      }).catch(error=>{
        console.log(error.message);
      })

    }

    }
 





  render() {
    const {form} = this.state;
    return (
      <div>
        <nav className="navbar navbar-light containers">
         
          <div className="item tas gr1"> <strong> Tasks </strong></div>
         
          <div class=" row item time gr2">
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

          <div className="item gr3">
            <button className="btn" onClick={() => this.modalInsertar()}>
              <img src={ad} className="im" />

              <strong>Add Task</strong>
            </button>
          </div>
        </nav>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
            <div className="newtask">
              <strong>New Task</strong>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
               <p>Title (requiered)</p>
            <input type="text" name="title" className="form-control"  onChange={this.handleChange} value={form.title} required />
            <span style={{color: "#A80F2E"}}>{this.state.errors["name"]}</span>
            </div>

            <div>
               <p>Description</p>
            <textarea type="textarea" name="name" className="form-control area" rows="5" onChange={this.handleChange} value={form.name}></textarea>
            </div>
           
          </ModalBody>
          <ModalFooter>
                <button
                  type="button"
                  className="btn btn-secondary mod cor btgrid1"
                  onClick={() => this.modalInsertar()}
                >Canselar</button>
                <button type="button" className="btn btn-prima mod btngrid2" onClick={()=>this.peticionPost()}>
                  Save
                </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NavBar;

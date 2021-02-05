import React from "react";
import NavBar from "../components/NavBar";
import img from "../images/check-out.svg";
import img1 from "../images/check-in.svg";
import "../components/styles/Pagestask.css";
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {BootstrapTable} from 'bootstrap-table';
import { Button } from "bootstrap";
import edit from '../images/pen.svg';
import dele from '../images/delete.svg';

const url = "http://localhost:3000/api/todos/";
let newDate = new Date();
let day = newDate.getDate()+'/'+newDate.getMonth()+'/'+newDate.getFullYear();
class PageTask extends React.Component {
  
  state = {
    data: [],
    dataid: [],
    modalInsertar: false,
  };
  peticionGet = () => {
    axios.get(url).then((response) => {
      this.setState({data: response.data.body});
    }).catch(err => {
      console.log(err.message);
    });
  };

  peticionGetId = (id) => {
    axios.get(url+'/'+id).then((response) => {
      this.setState({dataid: response.data.body[0]});
    }).catch(err => {
      console.log(err.message);
    });
  };

  peticionDelete=(id)=>{
    axios.delete(url+'/'+id).then((response) => {
    }).catch(err => {
      console.log(err.message);
    });
  };

  componentDidMount() {
    this.peticionGet();
  }
  componentDidUpdate(){
    this.peticionGet();
  }

rowEvents={
  onClick : (row) =>{
    console.log(row);
  }
}
modalInsertar = () => {
  this.setState({ modalInsertar: !this.state.modalInsertar });
};

optenerValor = (params) =>{
  
  console.log(params);
this.peticionGetId(params);
  console.log(this.state.dataid);
}

  render() {
    return (
      <div className="table-responsive">
        <NavBar />

        <table className="table" data-toogle="table" rowEvents={this.rowEvents}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Created</th>
              <th scope="col">Description</th>
            </tr>
          </thead>

          <tbody >
            {this.state.data.map(task=>{
              return(
                <tr>
                  <th>
                  {(() => {
        switch (task.completed) {
          case 1:   return  <button type="button" className="bd" id="checks" data-toggle="modal" value={task.id} data-target="#myModalRight" onClick={() => this.optenerValor(task.id)}> 
          <img src={img1} className="checks"></img>
          </button>
          case 0: return <button type="button" className="bd" id="checks" value={task.id} data-toggle="modal" data-target="#myModalRight" onClick={() => this.optenerValor(task.id)}> 
          <img src={img} className="checks"></img>
          </button>
          default:      return <img src={img} className="checks" />;
        }
      })()}

                  
                  </th>
                  <td>{task.title}</td>
                  <td>{day}</td>
                  <td>{task.name}</td>
                  <td className="">{task.id}</td>

                </tr>
              )
            })}      
          </tbody>
        </table>.


        <div id="myModalRight" class="modal fade modal-right mdsize" tabindex="-1" role="dialog" >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
           
            <button
              type="button" class="close"  data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <br/>
              <h4 class="modal-title" className="fuent"> <strong> {this.state.dataid.title} </strong></h4>
            <br/>
                    {(() => {
        switch (this.state.dataid.completed) {
          case 1:   return    <select class="custom-select" id="inputGroupSelect01">
                                <option value="1" selected >Status: Ready</option> 
                                <option value="0" >Status: Pending</option>
                                </select>
          case 0: return  <select class="custom-select" id="inputGroupSelect01">
                               <option value="1" >Status: Ready</option> 
                                <option value="0" selected>Status: Pending</option>
                                   </select>
          default: return <option value="0" selected>Status: Pending</option>
        }
      })()}
          </div>

          <div class="modal-body">
            <h5 className="fuent">
              <strong>
                Created
              </strong>
            </h5>
            <h6>27/jan/2021</h6>
            <br/>

              <h5 className="fuent"> <strong>Description</strong>  </h5>

              <div class="form-group">
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" value={this.state.dataid.name}></textarea>
                </div>
          </div>

          <div class="modal-footer foote">

            <div className="btns">
              <button type="button"  class="btn btnn"  data-dismiss="modal" >
              <img src={edit} className="im"></img>
            <strong>  Edit</strong></button>
            </div>
            

              <div className="btns">
                 <button type="button"  class="btn btnn"  data-dismiss="modal" onClick={() => this.peticionDelete(this.state.dataid.id)}>
              <img src={dele} className="im"></img>
             <strong> Delete</strong></button>
                </div>

              </div>
           
        </div>
      </div>
    </div>


      </div>
    );
  }
}

export default PageTask;

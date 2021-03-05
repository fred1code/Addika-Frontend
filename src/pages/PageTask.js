import React from "react";
import NavBar from "../components/NavBar";
import img from "../images/check-out.svg";
import img1 from "../images/check-in.svg";
import "../components/styles/Pagestask.css";
import axios from "axios";
import edit from '../images/pen.svg';
import dele from '../images/delete.svg';
import { connect } from 'react-redux';
import * as taskActions from '../actions/taskActions';

const qs = require('qs');

const url = "http://localhost:3000/api/todos/";
//const url = "http://tu-ip-externa:3000/api/todos/";
let newDate = new Date();
let day = newDate.getDate()+'/'+newDate.getMonth()+'/'+newDate.getFullYear();
class PageTask extends React.Component {
 


  state = {
    data: [],
    dataid: [],
    names:[],
    form:{
      id:'',
      title:'',
      name:'',
      completed:'',
    },
    update:{name:''},
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

  peticionUpdate= (id, data)=>{
    console.log('peticion put : '+url+'/'+id);
    axios.put(url+'/'+id,data).then((response) => {
    }).catch(err => {
      console.log(err.message);
    });
  }

  componentDidMount() {
   this.props.traerTodos();
    // this.peticionGet();
  }
  componentDidUpdate(){
   // this.peticionGet();
  }

  handleChange=async e=>{
    e.persist();
    await this.setState({
      dataid:{
        ...this.state.dataid,
        [e.target.name]: e.target.value
      }
    });
    }


modalInsertar = () => {
  this.setState({ modalInsertar: !this.state.modalInsertar });
};

optenerValor = (params) =>{
  
  console.log(params);
this.peticionGetId(params);
  console.log(this.state.dataid);
}

valoresUpdate = (id)=>{
let valorstatus = document.getElementById('statusup').value;
 let datas = qs.stringify({
'data': '{ "name":"'+this.state.dataid.name+'", "title":"'+this.state.dataid.title+'", "compled":"'+valorstatus+'" }' 
 });
 this.peticionUpdate(id,datas);

}

  render() {
  
    return (

      
      <div className="headcont">
      <div className="titlehead">
        <h2> <strong>My Tasks</strong> </h2>
      </div>

      <div className="table-responsive">
        <NavBar />

        <table className="table" data-toogle="table" rowEvents={this.rowEvents}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Created</th>
              <th scope="col" className="colname">Description</th>
            </tr>
          </thead>

          <tbody >
            {this.props.task.map(task=>{
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
                  <td className="colname">{task.name}</td>
                  <td className="isd">{task.id}</td>

                </tr>
              )
            })}      
          </tbody>
        </table>.

        <div id="myModalRight" class="modal fade modal-right mdsize" tabindex="-1" role="dialog" >
      <div class="modal-dialog respos" role="document">
        <div class="modal-content">
          <div className="modal-header mdgrid0" >
           
            <button
              type="button" className="close mdgrid1"  data-dismiss="modal"  aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
              <h4 className="modal-title mdgrid2" > <strong> {this.state.dataid.title} </strong></h4>
         
                    {(() => {
        switch (this.state.dataid.completed) {
          case 1:   return    <select className="form-control mdgrid3" id="statusup" >
                                <option value="1" selected >Status: Ready</option> 
                                <option value="0" >Status: Pending</option>
                                </select>
          case 0: return  <select className="form-control mdgrid3" id="statusup" >
                               <option value="1" >Status: Ready</option> 
                                <option value="0" selected>Status: Pending</option>
                                   </select>
          default: return <option value="0" selected>Status: Pending</option>
        }
      })()}
          </div>

          <div class="modal-body">
            <h6 className="fuent fuentpd">
              <strong>
                Created
              </strong>
            </h6>
            <h7>27/jan/2021</h7>
            

              <h6 className="fuent fuentpdd"> <strong>Description</strong>  </h6>

              <div class="form-group">
               <textarea class="form-control texx" name="name" id="nameup" rows="5" value={this.state.dataid.name}  onChange={this.handleChange} > </textarea>
                </div>
          </div>

          <div class="modal-footer foote">

            <div className="btns">
              <button type="button"  class="btn btnn" id="statusup" data-dismiss="modal" onClick={()=> this.valoresUpdate(this.state.dataid.id)} >
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
      </div>
    );
  }
}
const mapStateToProps = (reducers) => {
  return reducers.taskReducer;
};

export default connect(mapStateToProps, taskActions)(PageTask);

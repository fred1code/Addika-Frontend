import axios from "axios";


export const traerTodos = () => (dispatch) => {

    const url = "http://localhost:3000/api/todos/";
//const url = "http://tu-ip-externa:3000/api/todos/";
    axios.get(url).then((response) => {

       // this.setState({data: response.data.body});
      dispatch({
        type: 'show_task',
        payload : response.data.body
    })
    }).catch(err => {
        console.log(err.message);
      });


    
}
const INITIAL_STATE = {
    task: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "show_task":
        return { ...state, task: action.payload };
      default:
        return state;
    }
  };
  
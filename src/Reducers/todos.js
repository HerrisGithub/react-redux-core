const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            name:action.name
          }
        ]
      default:
        return state
    }
  }
   
  export default todos
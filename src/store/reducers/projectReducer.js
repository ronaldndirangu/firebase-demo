
const initialState = {
  projects: [
    { id: 1, title: 'help me find the princess', content: 'Blah blah blah blah blah'},
    { id: 2, title: 'the dragons are coming', content: 'Raah rah rah rah rah'},
  ]
};

const projectReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return {
        ...state
      }
    case 'CREATE_PROJECT_ERROR':
      return {
        ...state
      }
    default:
      return state;
  }
};

export default projectReducer;

import { DECREASE, INCREASE } from '../constants/action-types';


const initialState = { count: 0 };

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case DECREASE: {
      return { count: state.count - 1 };
    }
    case INCREASE: {
      return { count: state.count + 1 };
    }
    case 'RESET': {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;

// cashFlowReducer.js
const initialState = {
    cashFlowData: {
      cash_in_total: 0,
      cash_out_total: 0,
      total: 0
    },
    transactions: [],
  };
  
  const cashFlowReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case 'FETCH_TRANSACTIONS':
        return {
          ...state,
          transactions: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default cashFlowReducer;
  
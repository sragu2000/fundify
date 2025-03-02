export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const fetchTransactions = (transactions) => ({
  type: FETCH_TRANSACTIONS,
  payload: transactions,
});
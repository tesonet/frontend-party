import { connect } from 'react-redux';

import List from './List.js';

export default connect((state) => {
  return {
    list: state.reducerList.list,
    listLoading: state.reducerList.listLoading,
    listError: state.reducerList.listError,
  };
})(List);

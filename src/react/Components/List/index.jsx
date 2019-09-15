import {connect} from "react-redux";
import ListPage from "./listPage";

const mapStateToProps = (token) => {
   return{
       token: token
   }
};

export default connect(mapStateToProps, null)(ListPage);

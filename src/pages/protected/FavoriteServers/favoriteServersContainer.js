import {connect} from 'react-redux'
import FavoriteServers from './Components/FavoriteServers'

const mapStateToProps = (state) => ({
    favorites: state.serversReducer.favorites,
})

export default connect(mapStateToProps, null)(FavoriteServers)


import { connect } from 'react-redux'
import FavouriteServers from './Components/FavouriteServers'

const mapStateToProps = state => ({
  favourites: state.serversReducer.favourites
})

export default connect(mapStateToProps, null)(FavouriteServers)


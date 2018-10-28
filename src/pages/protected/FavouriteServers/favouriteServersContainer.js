import { connect } from 'react-redux'
import FavouriteServers from './Components/FavouriteServers'

const mapStateToProps = state => ({
  favorites: state.serversReducer.favourites
})

export default connect(mapStateToProps, null)(FavouriteServers)


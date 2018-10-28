import { connect } from 'react-redux'
import uuid from 'uuid'
import ServerList from './Components/ServerList'
import { fetchList, addToFavourites, sortByDistance, sortByName, removeFromFavourites } from './serversActions'

const mapDispatchToProps = dispatch => ({
    fetchList: (token) => dispatch(fetchList(token)),
    addToFavourites: server => dispatch(addToFavourites(server)),
    sortByDistance: () => dispatch(sortByDistance()),
    sortByName: () => dispatch(sortByName()),
    removeFromFavourites: server => dispatch(removeFromFavourites(server))
})

export const mapStateToProps = state => ({
    servers: addId(state.serversReducer.servers)
})

const addId = countries => countries.map(country => Object.assign({}, country, {
    id: uuid.v1()
}))

export default connect(mapStateToProps, mapDispatchToProps)(ServerList)


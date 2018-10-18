import {connect} from 'react-redux'
import uuid from 'uuid'
import Servers from './Components/Servers'
import {fetchList, addToFavorites} from './serversActions'

const mapDispatchToProps = (dispatch) => ({
    fetchList: () => dispatch(fetchList()),
    addToFavorites: (id) => dispatch(addToFavorites(id)),
})

const mapStateToProps = (state) => ({
    servers: addId(state.serversReducer.servers)
})

const addId = countries => countries.map((country) => Object.assign({}, country, {
    id: uuid.v1()
}))

export default connect(mapStateToProps, mapDispatchToProps)(Servers)


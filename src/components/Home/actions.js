import api from "../../service/api";
import {useDispatch, useSelector} from "react-redux";
import actionList from "../../common/actionList";

const addUniqueKeys = (serverList)=> {
    return serverList.map((entry, key)=> ({...entry, key: key}))
}

const retrieveServerList = (dispatch, rows) => {
    if (!rows || rows.length < 1) {
        dispatch(actionList.enablePreloader())
        api.getServers().then((serverList) => {
            dispatch(actionList.disablePreloader())
            dispatch(actionList.setServers(addUniqueKeys(serverList)));
        })
    }
};

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export default function () {
    const dispatch = useDispatch();
    const rows = useSelector(state => state.generalReducer.servers);
    const orderBy = useSelector(state => state.tableReducer.orderBy);
    const order = useSelector(state => state.tableReducer.order);
    const selected = useSelector(state => state.tableReducer.selected);
    const page = useSelector(state => state.tableReducer.page);
    const rowsPerPage = useSelector(state => state.tableReducer.rowsPerPage);

    retrieveServerList(dispatch, rows)

    return {
        rows: rows || [],
        order,
        orderBy,
        selected,
        page,
        rowsPerPage,
        handleRequestSort: (event, property) => {
            const isAsc = orderBy === property && order === 'asc';
            dispatch({type: 'SET_ORDER', payload: (isAsc ? 'desc' : 'asc')});
            dispatch({type: 'SET_ORDER_BY', payload: property});
        },
        handleSelectAllClick: () => dispatch((event) => {
            if (event.target.checked) {
                const newSelecteds = rows.map(n => n.name);
                return {type: 'SET_SELECTED', payload: newSelecteds};
            }
            return {type: 'SET_SELECTED', payload: []};
        }),
        handleChangePage: (event, newPage) => {
            dispatch({type: 'SET_PAGE', payload: newPage})
        },
        handleChangeRowsPerPage:  event => {
            dispatch({type: 'SET_ROWS_PER_PAGE', payload: parseInt(event.target.value, 10)})
            dispatch({type: 'SET_PAGE', payload: 0})
        },
        stableSort,
        getSorting
    }
}
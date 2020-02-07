const initState = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    page: 0,
    rowsPerPage: 30
}

const generalReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return {
                ...state,
                order: action.payload
            }
        case 'SET_ORDER_BY':
            return {
                ...state,
                orderBy: action.payload
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.payload
            }
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload
            }
        case 'SET_ROWS_PER_PAGE':
            return {
                ...state,
                rowsPerPage: action.payload
            }
        default:
            return state
    }
}

export default generalReducer;
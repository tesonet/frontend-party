export default {
    enablePreloader: ()=>({type: 'SET_PRELOADER', payload: true}),
    disablePreloader: ()=>({type: 'SET_PRELOADER', payload: false}),
    setServers: (severs)=>({type: 'SET_SERVERS', payload: severs}),
    setFailedLogin: (status)=>({type: 'SET_FAILED_LOGIN', payload: status}),
    setCredentials: (credentials)=>({type: 'SET_CREDENTIALS', payload: credentials}),
    setIsLoggedIn: (status)=>({type: 'SET_IS_LOGGED_IN', payload: status})
}
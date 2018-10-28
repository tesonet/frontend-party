const axios = jest.genMockFromModule('axios')
axios.create = jest.fn(() => axios)
export default axios
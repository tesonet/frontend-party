let res = {}
const axios = jest.fn(() => res)
axios.__set = v => res = v
export default axios
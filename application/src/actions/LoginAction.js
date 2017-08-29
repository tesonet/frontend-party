import axios from 'axios';
import { LOGIN_REQUEST } from './Actions';

export function Login({ username, password }) {
  return {
    type: LOGIN_REQUEST,
    payload: axios.post('http://playground.tesonet.lt/v1/tokens',
        {
    data: {
        username,
        password
      },
        headers: {
        "Content-Type": "application/json"
      }
    })
    // .then((res) => {
    //   console.log(res);
    // }).catch((err) => {
    //   console.log(username, password);
    // })
  }
}

/* TRY REDUX format
constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err: false
    }
  }

  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group col-2'>
            <input
            className='form-control'
            placeholder='Username'
            onChange={(e) => this.handleChange('username', e)}
            />
          </div>
          <div className='form-group col-2'>
            <input
            className='form-control'
            placeholder='Password'
            type='password'
            onChange={(e) => this.handleChange('username', e)}
            />
          </div>
        </form>
      </div>
    )
  }
}
*/

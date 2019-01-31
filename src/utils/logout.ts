import history from '../utils/history';

export default function logout() {
  localStorage.removeItem('apitoken');
  history.push('/login');
}

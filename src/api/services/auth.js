import Service from './service'

export default class extends Service {
  login(user) {
    return this.client.post(this.getUri('tokens'), user)
  }
}

import Service from './service'

export default class extends Service {
  fetch() {
    return this.client.get(this.getUri('servers'))
  }
}

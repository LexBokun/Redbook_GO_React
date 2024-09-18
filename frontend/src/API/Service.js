import axios from 'axios'

export default class Service {
  static async getAllCards(limit, page) {
    const response = await axios.get('/posts', {
      params: {

    })
    return response
  }

  static async getById(id) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    return response.data
  }
}

import React from 'react'
import Header from './components/Header'
import List from './components/List'
import Pagination from './components/Pagination'
export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      list: [],
      limit: 5,
      q: ''
    }
    this.update = this.update.bind(this)
    this.search = this.search.bind(this)
    this.delete = this.delete.bind(this)
    this.paginate = this.paginate.bind(this)
  }
  componentWillMount () {
    this.update(this.state)
  }
  delete (id) {
    fetch('/api/users/' + id,
    {method: 'DELETE'})
    .then(res => {
        this.update({})
        })
  }
  search (args) {
    let q = args.q === '' ? undefined : args.q
    const state = {...this.state, q, page:1}
    this.update(state)
  }
  paginate (page) {
    const state = {...this.state, page}
    this.update(state)

  }
  update (args) {
    let aux = {}
    Object.keys(args).length > 0 ? aux=args : aux=this.state
    const {q, page, limit} = aux
    const self = this
    return fetch(`/api/users?${q ?'q='+q:''}&_page=${page}&_limit=${limit}`)
    .then(res => res.json())
    .then(result => {

      self.setState({
        q,
        page,
        limit,
        list: [...result]
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Header onSearch={this.search} onUpdated={this.update} />
        <List list={this.state.list} onDelete={this.delete} />
        <Pagination {...this.state} onPaginate={this.paginate} />
      </div>
    )
  }

}

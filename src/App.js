import React from 'react'
import Header from './components/Header'
import List from './components/List'
// import ReactModal from 'react-modal';
export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    const self = this
    fetch('/api/users').then(res => res.json()).then(result => {
      self.setState({
        list: [...result]
      })
    })
  }
  render () {
    console.log('render', this.state)
    return (
      <div className='container'>
        <Header />
        <List list={this.state.list} />
      </div>
    )
  }

}

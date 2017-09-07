import React from 'react'
import NewContact from './NewContact'



export default class Header extends React.Component {

  render () {
    return (
      <div className='header'>
        <div className='logo'>
          Test <b>Beetrack</b>
        </div>
        <div className='search-input'>
          <label htmlFor='search-box'>
            <i className='fa fa-search'></i>
          </label>
          <input id='search-box'
            placeholder='Search contact'
            type='text'
            onChange={e => {this.props.onSearch({q:e.currentTarget.value})}}
          />
        </div>
        <NewContact onUpdated={this.props.onUpdated}/>
      </div>
    )
  }

}

import React from 'react'

var imgStyle = background => ({
  backgroundImage: `url(${background})`
})
const TableHead =  props =>(
  <div className='tablehead row'>
    <div>Nombre</div>
    <div>Descripcion</div>
  </div>
)
const ListItem =  ({item, onDelete}) => (
  <div className='row'>
    <div>
      <div className='avatar' style={imgStyle(item.photo)}>
      </div>
      <div>
        <span>{item.name}</span>
        <a href='#' onClick={() =>{onDelete(item.id)}}>
          eliminar
        </a>
      </div>
    </div>
    <div>{item.description}</div>
  </div>
)

export default class List extends React.Component {

  render () {
    let renderList = records => (
      <div className='list'>
      <TableHead />
      {records.map(item =>(<ListItem key={item.id} item={item} onDelete={this.props.onDelete} />))}
      </div>
    )
    const {list} = this.props
    return (list.length > 0) ? renderList(list) : (<div className='list'><b>no hay resultados</b></div>)

      }

    }

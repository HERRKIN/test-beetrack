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
const ListItem =  ({item}) => (
  <div className='row'>
    <div>
      <div className='avatar' style={imgStyle(item.photo)}>
      </div>
      <div>
        {item.name}
        <a href='#'>
          eliminar
        </a>
      </div>
    </div>
    <div>{item.description}</div>
  </div>
)




export default class List extends React.Component {

  static propTypes = {

  }

  render () {
    let renderList = records => (
      <div className='list'>
      <TableHead />
      {records.map(item =>(<ListItem key={item.id} item={item} />))}
      </div>

    )
    const {list} = this.props
    console.log('list', list, list && list.legth > 0)
    return (!list ||  list.legth > 0) ? (<div>no hay elementos</div>): renderList(list)

      }

    }

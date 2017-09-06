import React from 'react'
import Modal from 'react-modal'

const modalStyles = {
  overlay:{
    background:'rgba(80,83,85,.7)'
  },
  content : {
    width: '40%',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    padding:0
  }
};

export default class NewContact extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      modalOpened:props.modalOpened,
    }
  }

  newContact(){
      this.setState({
        modalOpened:true
      })
  }


  render () {
    console.log(this.state)
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpened}
          style={modalStyles}
          contentLabel="Modal"
          >
            <h1>Nuevo contacto<button>x</button></h1>
            <form id='new' onSubmit={changes => this.setState(changes)}>
              <label htmlFor='urlavatar'>Url de la foto de perfil</label>
              <input id='urlavatar' type='text' placeholder='url'/>
              <label htmlFor='nombre'>Nombre</label>
              <input id='nombre' type='text' placeholder='Nombre'/>
              <label htmlFor='description'>Descripcion</label>
              <textarea id='description' rows='4' placeholder='Descripcion'/>
              <button type='submit'>guardar</button>
            </form>
          </Modal>
          <button onClick={this.newContact.bind(this)}>
            <i className='fa fa-plus-circle'></i>
            New Contact
          </button>
        </div>
      )
    }

  }

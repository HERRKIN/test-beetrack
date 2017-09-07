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
      valid:false
    }
    this.modalClose = this.modalClose.bind(this)
    this.newContact = this.newContact.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  newContact () {
    this.setState({
      modalOpened:true
    })
  }
  modalClose () {
    this.setState({modalOpened:false})
  }
  handleSubmit (ev) {
    ev.preventDefault()
    let self = this
    const body = {
      photo: ev.currentTarget.urlavatar.value,
      name: ev.currentTarget.personName.value,
      description: ev.currentTarget.description.value
    }

    fetch('/api/users',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)})
      .then(res => res.json())
      .then(r => {
        self.setState({modalOpened: false}, () => {
          this.props.onUpdated({})
        })
      })

    }
    validate(e){

    var validated = Object.keys(e.currentTarget).reduce((prev, elem) =>{
      //only 3 inputs I want to validate
      if(elem < 3)
      return prev && e.currentTarget[elem].value !== ''
      else
      return prev
    }, true )
    this.setState({valid: validated})
    }

    render ()
    {
      return (
        <div>
          <Modal
            isOpen={this.state.modalOpened}
            style={modalStyles}
            contentLabel="Modal"
            >
              <h1>Nuevo contacto<button onClick={this.modalClose}>x</button></h1>
              <form id='new' onChange={this.validate} onSubmit={event => {this.handleSubmit(event)}}>
                <label htmlFor='urlavatar'>Url de la foto de perfil</label>
                <input id='urlavatar' type='text' placeholder='url'/>
                <label htmlFor='name'>Nombre</label>
                <input id='personName' type='text' placeholder='Nombre'/>
                <label htmlFor='description'>Descripcion</label>
                <textarea id='description' rows='4' placeholder='Descripcion'/>
                <button type='submit' disabled={!this.state.valid} >Guardar</button>
              </form>
            </Modal>
            <button onClick={this.newContact}>
              <i className='fa fa-plus-circle'></i> New Contact
            </button>
          </div>
        )
      }

    }

import React from 'react'
import { inject, observer } from 'mobx-react'
import StyledModal from 'react-modal'

interface IModal {
  modalStore: any
  children: React.ReactDOM
}

export default () => {
  return Component => {
    @inject('modalStore')
    @observer
    class Modal extends React.Component<IModal> {
      constructor(props) {
        super(props)
      }

      render() {
        const { children, modalStore } = this.props
        const { toggleModal } = modalStore
        return (
          <React.Fragment>
            <span style={{ cursor: 'pointer' }} onClick={toggleModal}>{children}</span>
            <StyledModal isOpen={modalStore.visible} 
                         onRequestClose={toggleModal}
                         style={customStyles}
                         ariaHideApp={false}
            >
              <Component {...this.props} />
            </StyledModal>
          </React.Fragment>
        )
      }
    }
    return Modal
  }
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

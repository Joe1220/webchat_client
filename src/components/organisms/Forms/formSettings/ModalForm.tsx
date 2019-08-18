import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
import StyledModal from "react-modal";

interface IModal {
  modalStore: any;
  children: React.ReactDOM;
}

export default (): any => {
  return Component => {
    return inject("modalStore")(
      observer((props: IModal) => {
        useEffect(() => {
          return () => {
            props.modalStore.closeModal();
          };
        }, []);
        const { children, modalStore } = props;
        const { toggleModal } = modalStore;
        return (
          <React.Fragment>
            <span style={{ cursor: "pointer" }} onClick={toggleModal}>
              {children}
            </span>
            <StyledModal
              isOpen={modalStore.visible}
              onRequestClose={toggleModal}
              style={customStyles}
              ariaHideApp={false}
            >
              <Component {...props} />
            </StyledModal>
          </React.Fragment>
        );
      })
    );
  };
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

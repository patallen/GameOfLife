import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createFile,
  cancelCreateFile,
  initiateCreateFile
} from "../actions/game-view";
import { TextInput, NumberInput } from "./ui/input";
import {
  InputCase,
  FormGroup,
  PanicButton,
  SuccessButton,
  ButtonCase
} from "./ui/buttons";
import { NotEmptyValidator, GroupedValidator } from "../lib/validators.js";
import ReactModal from "react-modal";

class CreateFileModal extends React.Component {
  createFile(event) {
    let { title, width, height } = this;
    let file = {
      title: title.value,
      width: width.value,
      height: height.value
    };
    this.props.actions.createFile(file);
    this.close();
  }
  close() {
    this.props.actions.cancelCreateFile();
  }
  render() {
    let { actions, isCreatingNew } = this.props;

    return (
      <ReactModal
        isOpen={isCreatingNew}
        contentLabel="Create"
        className="modal"
        overlayClassName="modal-overlay"
        className="modal"
        onRequestClose={actions.cancelCreateFile}
      >
        <h2>New Board</h2>

        <FormGroup>
          <TextInput label="Title" ref={n => (this.title = n)} />
          <InputCase>
            <NumberInput label="Width" ref={n => (this.width = n)} />
            <NumberInput label="Height" ref={n => (this.height = n)} />
          </InputCase>
        </FormGroup>

        <ButtonCase>
          <PanicButton onClick={actions.cancelCreateFile}>Cancel</PanicButton>
          <SuccessButton onClick={this.createFile.bind(this)}>
            Create New Board
          </SuccessButton>
        </ButtonCase>
      </ReactModal>
    );
  }
}

function mapStateToProps(state) {
  return {
    isCreatingNew: state.view.modals.isCreatingNew
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { initiateCreateFile, cancelCreateFile, createFile },
      dispatch
    )
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateFileModal);

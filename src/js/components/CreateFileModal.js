import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  createFile,
  cancelCreateFile,
  initiateCreateFile
} from "../actions/game-view";
import { TextInput, NumberInput } from "./ui/input";
import { Button } from "./ui/buttons";
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
    return (
      <ReactModal
        isOpen={this.props.isCreatingNew}
        contentLabel="Create"
        className="modal"
        overlayClassName="modal-overlay"
        className="modal"
        onRequestClose={this.props.actions.cancelCreateFile}
      >
        <TextInput label="Title" ref={n => (this.title = n)} />
        <NumberInput label="Weight" ref={n => (this.width = n)} />
        <NumberInput label="Height" ref={n => (this.height = n)} />
        <Button text="Cancel" onClick={this.props.actions.cancelCreateFile} />
        <Button text="Create" onClick={this.createFile.bind(this)} />
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

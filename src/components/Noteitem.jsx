import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import IconButton from "@material-ui/core/IconButton";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

const Noteitem = props => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const {note, updateNote} = props;

  return (
    <div className="col-md-3">
      <div className="card bg-light my-3">
        <div className="card-body">
          <span
            style={{right: 0, top: 0}}
            className="position-absolute badge bg-danger"
          >
            {note.tag.charAt(0).toUpperCase() + note.tag.slice(1)}
          </span>
          <h5 className="card-title mt-3">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <IconButton
            size="medium"
            aria-label="add an alarm"
            onClick={() => {
              updateNote(note);
            }}
          >
            <EditTwoToneIcon className="text-success icon" />
          </IconButton>
          <IconButton
            color="secondary"
            size="medium"
            aria-label="add an alarm"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted Successfully", "success");
            }}
          >
            <DeleteRoundedIcon className="text-danger icon" />
          </IconButton>
          {/* <i
            className="far fa-trash-alt mx-2 text-danger"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i> */}
          {/* <i
            className="far fa-edit mx-2 text-success"
            onClick={() => {
              updateNote(note);
            }}
          ></i> */}
        </div>
      </div>
    </div>
  );
};

export default Noteitem;

import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import './add-event.css';

const buttonStyles = {
    float: 'right',
    marginTop: '20px'
};

const AddEvent = () => {
    return (
        <div className="addEvent">
            <TextField
                hintText="Feature title"
                style={{'width': '100%'}}
            />
            <DatePicker
                hintText="Select date"
                mode="landscape"
                autoOk={true}
                className="selectDate"
                textFieldStyle={{'width': '100%'}}
            />
            <RaisedButton
                label="Create event"
                labelPosition="before"
                primary={true}
                icon={<ActionNoteAdd/>}
                style={buttonStyles}
            />
        </div>
    )
};


export default AddEvent;
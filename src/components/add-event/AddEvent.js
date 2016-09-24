import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import './add-event.css';

const AddEvent = () => {
    return (
        <div className="addEvent">
            <TextField
                hintText="Feature title"
                style={{'width': '50%'}}
            />
            <DatePicker
                hintText="Select date"
                mode="landscape"
                className="selectDate"
            />
        </div>
    )
};


export default AddEvent;
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    let showTitle = props.title;
    let showText = props.text;
    if (showTitle.length > 25) showTitle = showTitle.slice(0, 25).concat("...");
    if (showText.length > 60) showText = showText.slice(0, 60).concat("...");
    const handleClick = (e) => {
        // {go to another page}
    }
    return (
        <div className="note" onClick={handleClick}>
            <h2 className="noteTitle">{showTitle}</h2>
            <p className="noteText">{showText}</p>
            <div className="delete flex">
                <IconButton aria-label="delete" className="iconButton" >
                    <DeleteIcon className="delete-icon" onClick={() => {
                        props.onDelete(props.id);
                    }} />
                </IconButton>
            </div>
        </div>
    );
};

export { Note };
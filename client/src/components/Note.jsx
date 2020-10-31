import React from 'react';

function Note(props) {
    let showTitle = props.title;
    let showText = props.text;
    if (showTitle.length > 25) showTitle = showTitle.slice(0, 25).concat("...");
    if (showText.length > 60) showText = showText.slice(0, 60).concat("...");
    return (
        <div className="note">
            <h2 className="noteTitle">{showTitle}</h2>
            <p className="noteText">{showText}</p>
            <div className="delete flex"><i className="fas fa-trash" onClick={() => { props.onDelete(props.id) }}></i></div>
        </div>
    );
};

export { Note };
import React from 'react';
import Logo from '@material-ui/icons/WbIncandescentOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux'
import { deleteAll } from '../actions'

export const Header = (props) => {

    const dispatch = useDispatch();
    return (
        <header>
            <div className="container flex">
                <h1 >
                    <Logo fontSize="large" className="logo" />
                    <a href="/" className="brand">Keeper</a>
                </h1>
                <div className="flex" style={{ gap: "2rem" }}>
                    <h4>
                        total : {props.count}
                    </h4>
                    <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(deleteAll())}
                    >
                        Delete All
                    </Button>
                </div>
            </div>
        </header>
    )
};

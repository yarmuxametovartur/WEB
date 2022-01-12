import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.store.getState().DialogsPage;

    let addMesssage = () => {
        props.store.dispatch(addMessageActionCreator());
    };
    let OnMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        < Dialogs updateNewMessageText={OnMessageChange} addMessage={addMesssage} DialogsPage={state} />
    )
}
export default DialogsContainer;
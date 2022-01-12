import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './Messages/MessageItem';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    // debugger

    let state = props.DialogsPage;

    // формирование новых массивов с помощью функции map
    let DialogsElements = state.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let MessagesElements = state.Messages.map(m => <MessageItem textMessage={m.message} id={m.id} />);

    let onAddMesssage = () => {
        props.addMessage();
    };
    let OnMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>

            <div className={s.messages}>
                {MessagesElements}
                <div>
                    <textarea onChange={OnMessageChange} value={props.NewMessageText} />
                </div>
                <div>
                    <button onClick={onAddMesssage}>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
import css from './Message.module.css';

function Message({ text }) {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default Message;

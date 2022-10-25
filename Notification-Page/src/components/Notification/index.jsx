import "./index.scss";

const Notification = ({
  className,
  avatar,
  text,
  boldText,
  name,
  date,
  message,
}) => {
  return (
    <div className={className}>
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="text-container">
        <p className="user-text">
          {name} {text}
          {boldText}
          {className.includes("active") ? <span></span> : " "}
        </p>
        <p className="date">{date} </p>
        {message ? <p>{message}</p> : ""}
      </div>
    </div>
  );
};

export default Notification;

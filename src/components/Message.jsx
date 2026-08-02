import "./Message.css";

export default function Message(props) {
  const style = {
    opacity: props.message !== "" ? 100 : 0,
  };
  return (
    <div className="message" style={style}>
      <h3>{props.message}</h3>
    </div>
  );
}

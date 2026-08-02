import "./Word.css";

export default function Word(props) {
  const wordBoxes = props.word.map((letter, index) => {
    return (
      <div className="word-box" key={index}>
        <p>{letter.show ? letter.char : null}</p>
      </div>
    );
  });
  return <div className="word-box-container">{wordBoxes}</div>;
}

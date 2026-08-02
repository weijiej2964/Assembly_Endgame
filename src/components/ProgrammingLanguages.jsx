import "./ProgrammingLanguages.css";

export default function ProgrammingLanguages(props) {
  const langList = props.lang.map((item) => {
    return (
      <div
        className="tag"
        style={{ background: item.background, color: item.color }}
        key={item.name}
      >
        <p>{item.name}</p>
      </div>
    );
  });

  return <section className="tag-section">{langList}</section>;
}

import "./HealthDisplay.css";

export default function HealthDisplay(props) {
  const healthList = props.health.map((item) => {
    return (
      <div key={item.name} className="tag-container">
        <p
          className={`tag ${item.isDead ? "dead" : null}`}
          style={{ background: item.background, color: item.color }}
        >
          {item.name}
        </p>
        {item.isDead ? <p className="skull">💀</p> : null}
      </div>
    );
  });

  return <section className="tag-section">{healthList}</section>;
}

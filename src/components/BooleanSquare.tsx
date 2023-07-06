import "../styles/booleanSquare.css";

export interface IBooleanSquareProps {
  title: string;
  isEnabled: boolean;
}

function BooleanSquare(props: IBooleanSquareProps) {
  const isEnabledCssName = props.isEnabled ? "enabled" : "disabled";

  return (
    <div className="list-square">
      <span className="list-square-title">{props.title}</span>
      <div className={`list-square-icon ${isEnabledCssName}`} />
    </div>
  );
}

export default BooleanSquare;

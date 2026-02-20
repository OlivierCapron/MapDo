import "./Suggestion.css";


function Suggestion({ villeSuggeree }) {
  return (
    <div className="suggestion">
      <span>{villeSuggeree.display_name}</span>
    </div>
  );
}

export default Suggestion;
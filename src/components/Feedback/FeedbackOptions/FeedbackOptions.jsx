const FeedbackOptions = ({ buttonName, increment }) => {
  const section = buttonName.map(name => (
    <button key={name} type="button" onClick={() => increment(name)}>
      {name}
    </button>
  ));
  return <div>{section}</div>;
};

export default FeedbackOptions;

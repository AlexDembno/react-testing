const Section = ({ text, children }) => {
  return (
    <div>
      <h1>{text}</h1>
      {children}
    </div>
  );
};

export default Section;

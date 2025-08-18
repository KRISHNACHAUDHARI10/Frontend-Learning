const List = ({ names }) => {
  return (
    <ol>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ol>
  );
};

export default List;

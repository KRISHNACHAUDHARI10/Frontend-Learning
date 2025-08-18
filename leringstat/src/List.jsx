import './list.css';

const List = ({ list }) => {
  return (
    <div className='mylist'>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;

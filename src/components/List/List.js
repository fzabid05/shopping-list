import ListIItem from "./ListItem/ListItem";

const List = ({ list, onDelete }) => {
  return (
    <div>
      <h1>Ma liste de cours</h1>
      <div>
        {list.map((item) => (
          <ListIItem item={item} key={item.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default List;

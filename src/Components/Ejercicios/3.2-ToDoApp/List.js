import Item from "./Item";
import todoArray from "./todoArray";

const List = () => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todoArray.map((item) => (
        <li key={item.id} style={{ marginTop: "30px" }}>
          <Item descripcion={item.descripcion} />
        </li>
      ))}
    </ul>
  );
};

export default List;

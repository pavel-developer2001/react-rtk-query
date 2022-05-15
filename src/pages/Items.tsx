import { useState } from "react";
import BackToHome from "../components/BackToHome";
import Item from "../components/Item";
import {
  useAddItemMutation,
  useDeleteItemMutation,
  useGetItemsQuery,
} from "../store/apis/itemApi";

const Items = () => {
  const { data: items, isLoading, error } = useGetItemsQuery();

  const [text, setText] = useState("");
  const [addItem, { isError, data, isLoading: loadingAdd }] =
    useAddItemMutation();
  const [deleteItem] = useDeleteItemMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        {error.status}:{`Message: ${error.data}`}
      </div>
    );
  }

  const handleAddItem = async () => {
    const newItem = { id: items.length + 1, text, likes: 0, watchCount: 0 };
    await addItem(newItem);
    setText("");
  };
  const handleDeleteItem = async (id: number) => {
    await deleteItem(id);
  };

  return (
    <div>
      <BackToHome />
      <div>
        <input
          placeholder='text item'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={!text || text.length <= 3} onClick={handleAddItem}>
          Add
        </button>
        {loadingAdd && <div>Adding new item</div>}
      </div>
      {items ? (
        items.map((item: any) => (
          <Item key={item.id} item={item} handleDeleteItem={handleDeleteItem} />
        ))
      ) : (
        <div>Posts List empty :(</div>
      )}
    </div>
  );
};

export default Items;

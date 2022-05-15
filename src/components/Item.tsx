import { FC, useState } from "react";
import { Item as IItem } from "../interfaces/item.interface";
import { useUpdateItemMutation } from "../store/apis/itemApi";

interface ItemProps {
  item: IItem;
  handleDeleteItem: (id: number) => void;
}
const Item: FC<ItemProps> = ({ item, handleDeleteItem }) => {
  const [text, setText] = useState(item.text);
  const [isEdit, setIsEdit] = useState(false);
  const [updateItem] = useUpdateItemMutation();
  const handleUpdateItem = async () => {
    await updateItem({ ...item, text });
    setIsEdit(!isEdit);
  };
  return (
    <div key={item.id}>
      {isEdit ? (
        <>
          <input
            placeholder='text item'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            disabled={!text || text.length <= 3}
            onClick={handleUpdateItem}
          >
            Good
          </button>
          <button onClick={() => setIsEdit(!isEdit)}>Cancell</button>
        </>
      ) : (
        item.text
      )}
      {!isEdit && (
        <>
          <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          <button onClick={() => setIsEdit(!isEdit)}>Update</button>
        </>
      )}
    </div>
  );
};
export default Item;

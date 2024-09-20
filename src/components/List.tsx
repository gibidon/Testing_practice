import { Item } from "./Item";

type Props = {
  items: Task[];
  onDelete: (id: Task["id"]) => void;
  onToggle: (id: Task["id"]) => void;
};

export const List = ({ items, onDelete, onToggle }: Props) => {
  const itemsToRender = items.length <= 10 ? items : items.slice(0,9) 

  return (
  <ul className="task-list tasks">
    {/* {items.map((item) => ( */}
    {itemsToRender.map((item) => (
      <Item
        {...item}
        key={item.id}
        onDelete={onDelete}
        onToggle={onToggle} />
    ))}
  </ul>
)
}
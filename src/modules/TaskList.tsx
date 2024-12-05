import { useDispatch, useSelector } from "react-redux";
import { Empty } from "src/components/Empty";
import { List } from "src/components/List";
import { useFilters } from "src/hooks/useFilters";
import { deleteTask, tasksSelector, toggleTask } from "src/store/taskSlice";

export const TaskList = () => {
  const items = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const handleDelete = (id: Task["id"]) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id: Task["id"]) => {
    dispatch(toggleTask(id));
  };

  const filteredItems = useFilters(items)  

  return items.length > 0 ? (
    <List items={filteredItems} onDelete={handleDelete} onToggle={handleToggle} />
  ) : (
    <Empty />
  );
};

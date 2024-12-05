import { render, screen } from "@testing-library/react";
import { List } from "src/components/List";
import { JestStoreProvider } from "../utils/JestStoreProvider";

const excessiveItems = [
   {
      id: "1",
      header: "купить хлеб",
      done: false,
    },
    {
      id: "2",
      header: "купить молоко",
      done: false,
    },
    {
      id: "3",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "3.5",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "4",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "5",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "6",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "7",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "8",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "9",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "10",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "11",
      header: "выгулять собаку",
      done: false,
    },
    {
      id: "12",
      header: "выгулять собаку",
      done: false,
    },
]

it("отображение списка задач", () => {
  const onDelete = jest.fn();
  const onToggle = jest.fn();

  const items: Task[] = [
    {
      id: "1",
      header: "купить хлеб",
      done: false,
    },
    {
      id: "2",
      header: "купить молоко",
      done: false,
    },
    {
      id: "3",
      header: "выгулять собаку",
      done: true,
    },
  ];

  const { rerender, asFragment } = render(
    <List items={items} onDelete={onDelete} onToggle={onToggle} />
  );
  const firstRender = asFragment();
  
  items.pop();

  rerender(<List items={items} onDelete={onDelete} onToggle={onToggle} />);
  const secondRender = asFragment();

  expect(firstRender).toMatchDiffSnapshot(secondRender);
});

it.only("Список содержит не больше 10 невыполненных задач", () => {
  const onDelete = jest.fn()
  const onToggle = jest.fn()
  render(<List onDelete={onDelete} onToggle={onToggle} items={excessiveItems}/>,{wrapper:JestStoreProvider})

  const list = screen.queryAllByRole('listitem')
  screen.debug()
  expect(list.length).toBeLessThan(11)
});

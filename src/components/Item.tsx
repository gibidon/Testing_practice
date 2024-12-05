import { validateHeaderMax, validateHeaderMin,HEADER_LENGTH_ERROR_MESSAGE } from "src/utils/helpers";
import { DeleteButton } from "./DeleteButton";

type Props = Task & {
  onDelete: (id: Task["id"]) => void;
  onToggle: (id: Task["id"]) => void;
};

export const Item = (props: Props) => {
  // const disabled = validateHeaderMax(props.header) || validateHeaderMin(props.header)
  const disabled = validateHeaderMax(props.header) && validateHeaderMin(props.header)

  return (
    <li className="item-wrapper">
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.done}
        onChange={() => props.onToggle(props.id)}
      />
      <label htmlFor={props.id} onClick={() => props.onToggle(props.id)}>
        {/* {props.done ? <s>{props.header}</s> : props.header} */}
        {disabled ? props.header :HEADER_LENGTH_ERROR_MESSAGE}
      </label>
      <DeleteButton
        disabled={!props.done}
        onClick={() => props.onDelete(props.id)}
      />
    </li>
  );
};

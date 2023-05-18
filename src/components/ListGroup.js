import Button from "./Button";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
function ListGroup(props) {
  return (
    <>
      <div>
        <ul className="list-group">
          {props.items.map((items, index) => (
            <li key={items + index} className="list-group-item">
              <Dropdown
                onChange={(e) =>props.onValueChange(e.target.value, "operator", index)}>
                {items}
              </Dropdown>

              <TextField   
              onChange={(e) =>props.onValueChange(Number(e.target.value), "value", index)}> 
              {items}
              </TextField>
              <Button 
              onClick={() => props.onClickDelete(index)}>Delete</Button>
              <Button
                onClick={() =>props.onValueChange(!items.isDisabled, "isDisabled", index)}>
                {items.isDisabled ? "Enable" : "disabled"}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListGroup;

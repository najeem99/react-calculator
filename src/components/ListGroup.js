import Button from "./Button";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
function ListGroup(props) {
  return (
    <>
      <div className="container">
            {props.items.map((items, index) => (
            <div  style={{ backgroundColor: items.isDisabled ? "Gray" : "white" }}  key={items + index} className="row  p-1 border d-flex align-items-center justify-content-center">
              <Dropdown
                onChange={(e) =>props.onValueChange(e.target.value, "operator", index)}>
                {items}
              </Dropdown>
{items.operator}
              <TextField   
              onChange={(e) =>props.onValueChange(Number(e.target.value), "value", index)}> 
              {items}
              </TextField>
              <Button 
              onClick={() => props.onClickDelete(index)}>Delete</Button>
              <Button
                onClick={() =>props.onValueChange(!items.isDisabled, "isDisabled", index)}>
                Disable
              </Button>
            </div>
          ))}
 
        <ul className="list-group">
         
        </ul>
      </div>
    </>
  );
}
export default ListGroup;

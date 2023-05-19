import Button from "./Button";
import Dropdown from "./Dropdown";
import TextField from "./TextField";
function ListGroup(props) {
  return (
    <>
      <div className="container">
            {props.items.map((items, index) => (
            <div  style={{ backgroundColor: items.isDisabled ? "#00000030" : "white" }}  key={items + index} className="row my-1 p-1 px-4 border d-flex align-items-center justify-content-center">
              <Dropdown
                onChange={(e) =>props.onValueChange(e.target.value, "operator", index)}>
                {items}
              </Dropdown>
              <TextField   
              onChange={(e) =>props.onValueChange(Number(e.target.value), "value", index)}> 
              {items}
              </TextField>
              <Button 
              buttonStyle={"btn-warning"}
              onClick={() => props.onClickDelete(index)}>Delete</Button>
              <Button
              buttonStyle={"btn-warning"}
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

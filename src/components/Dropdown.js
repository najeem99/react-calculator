export default function Dropdown(props,index) {
  return (
    <select   className="col-sm-1 m-2 form-select operator-dropdown" 
      value={props.operator}
      onChange={props.onChange}
      id="operators"
    >
      <option    value={"1"} >+</option>
      <option   value={"2"}>-</option>
    </select>
  );
}

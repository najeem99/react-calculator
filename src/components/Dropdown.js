export default function Dropdown(props) {
  return (
    <select
      value={props.operator}
      onChange={props.onChange}
      name="operators"
      id="operators"
    >
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
  );
}

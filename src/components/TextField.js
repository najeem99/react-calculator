export default function TextField(props) {
  return (
    <input onChange={props.onChange} type="number" value={props.value}></input>
  );
}

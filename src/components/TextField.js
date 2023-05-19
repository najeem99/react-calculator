export default function TextField(props) {
  console.log('init',props)
  return (
    <input  className="col-sm-3 m-2 form-control" onChange={props.onChange} type="number" value={props.children.value}></input>
  );
}

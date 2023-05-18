import { useState } from "react";
import { useEffect } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  //to add new row
  const addRow = () => {
    setItems((items) => [
      ...items,
      {
        operator: "1",
        value: "",
        isDisabled: false,
      },
    ]);
    console.log(items);
  };

  //to update values in array
  const onValueChange = (valueTobeChanged, variable, index) => {
    const temp = [...items];
    temp[index][variable] = valueTobeChanged;
    setItems(temp);
    console.log("ietmsmdnfs", items);
  };

  //to delete row
  const onDelete = (index) => {
    const temp = items.filter((item, cindex) => cindex !== index);
    setItems(temp);
    console.log("onDisable", temp);
  };

  const [items, setItems] = useState([{operator: "1",value: "",isDisabled: false,}]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let count = 0;
    items.forEach((x) => {
      if (!x.isDisabled) {
        console.log(x.operator === "1" ,x.operator);
         count = x.operator === "1" ? count + x.value : count - x.value;
      }
    });
    setTotalCount(count);
  }, [items]);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
             <h3  >{"Total " + totalCount}</h3>
         
          <div className="d-flex">
            <Button onClick={addRow}>Add</Button>
          </div>
        </div>
      </nav>

      <div>
        <ListGroup
          items={items}
          onValueChange={onValueChange}
          onClickDelete={onDelete}
        ></ListGroup>
      </div>
    </>
  );
}

export default App;

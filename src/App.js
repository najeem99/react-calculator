import { useState } from "react";
import { useEffect } from "react";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

let newEntryObject = {
  operator: "+",
  value: "",
  isDisabled: false,
};

function App() {
  //to add new row
  const addRow = () => {
    setItems((items) => [...items, JSON.parse(JSON.stringify(newEntryObject))]);
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

  const [items, setItems] = useState([newEntryObject]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    let count = 0;
    items.forEach((x) => {
      if (!x.isDisabled) {
        count = x.operator === "+" ? count + x.value : count - x.value;
      }
    });
    setTotalCount(count);
  }, [items]);

  return (
    <div>
      <h1>{"Total " + totalCount}</h1>
      <ListGroup
        items={items}
        onValueChange={onValueChange}
        onClickDelete={onDelete}
      ></ListGroup>
      <Button onClick={addRow}>Add</Button>
    </div>
  );
}

export default App;

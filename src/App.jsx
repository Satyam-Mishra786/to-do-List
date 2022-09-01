import React, { useState } from "react";
import "./main.css";
import ItemList from "./ListItem";
function App() {

  const [itemList, setItemList] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  }

  const addItem = () => {
    if (inputVal.length > 4) {
      setItemList([...itemList, inputVal]);
      setInputVal("");
    }
    else {
      alert("Item can not be empty!");
    }
  }

  const deleteItem = (id) => {
    setItemList(itemList.filter((item, arrIndex) => {
      return arrIndex !== id;
    }));
  }
  return (
    <>
      <div className="container">
        <h2>ToDO List</h2>
        <div className="box">
          <div className="left">
            <input className="inputField" type="text" onChange={handleChange} value={inputVal} name="addItem" placeholder="Add a Item" />
            <button className="addBtn" onClick={addItem}>+</button>
          </div>
          <div className="right">
            {itemList && itemList.map((data, index) => {
              return <ItemList index={index} key={index} deleteItem={deleteItem} data={data} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./Bucket.css";

const Bucket = (props) => {
  return (
    <div className="bucket-transfer">
      <div className="bucket">
        <h2> Bucket 1st 🧺</h2>
        <ul>
          {props.bucket1Items.map((item) => (
            <li key={item}>
              <button onClick={() => props.handleAddItem(item)}>Add</button>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <button className="addAll" onClick={props.handleAddAllItems}>
        Add All
      </button>

      <button className="removeAll" onClick={props.handleRemoveAllItems}>
        Remove All
      </button>
      <div className="bucket secondbox">
        <h2> Bucket 2nd 🧺</h2>
        <ul>
          {props.bucket2Items.map((item) => (
            <li key={item}>
              <button onClick={() => props.handleRemoveItem(item)}>
                Remove
              </button>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bucket;

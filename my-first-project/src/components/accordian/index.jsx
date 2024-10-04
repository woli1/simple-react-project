import React, { useState } from "react";
import data1 from "./data";
import "./style.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(currentId) {
    setSelected(currentId===selected?null:currentId);
  }
  function handleMultiSelection(currentId) {
    let cpyMultiple=[...multiple];
    const findIndexOfCurrendId=cpyMultiple.indexOf(currentId);
    if(findIndexOfCurrendId===-1)cpyMultiple.push(currentId);
    else cpyMultiple.splice(findIndexOfCurrendId,1);

    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enble Multi Selection
      </button>
      <div className="accordian">
        {data1 && data1.length > 0 ? (
          data1.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {/*selected===dataItem.id||multiple.indexOf(dataItem.id)!==-1?(<div className='content'>{dataItem.answer}</div>):null*/}
              {enableMultiSelection?
                multiple.indexOf(dataItem.id)!==-1&&(<div className="acc-content">{dataItem.answer}</div>):
                selected===dataItem.id&&(<div className='acc-content'>{dataItem.answer}</div>)
              }
            </div>
          ))
        ) : (
          <div>NO data found</div>
        )}
      </div>
    </div>
  );
}

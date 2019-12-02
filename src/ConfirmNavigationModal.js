import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

export default function ConfirmNavigationModal({onCancel, onConfirm}){
  const [isVisible, setIsVisible] = useState(true);
  let history = useHistory();
 
  onCancel = e => {
    e.stopPropagation();
    setIsVisible(false);
    history.goBack();
  };

  onConfirm = () => {
    setIsVisible(false);
    console.log('confirm');
  }

  return(
     isVisible && (<div
      onClick={onCancel}
      className="wrapper"
    >
      <div
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>Modal title</h1>
        <button type="button" onClick={onCancel}>
          Close
        </button>
        <button type="button" onClick={onConfirm}>
          Confirm
        </button>
      </div>)
    </div>
  )
  )
};
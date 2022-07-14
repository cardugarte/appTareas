import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {

  const onClickButton = () => {
    console.log('soy un click');
  }

  return(
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    > +
    </button>
  )
}

export { CreateTodoButton };
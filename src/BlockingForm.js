import React, { useState } from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import ConfirmNavigationModal from "./ConfirmNavigationModal";

export default function BlockingForm() {
  let [isBlocking, setIsBlocking] = useState(false);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        event.target.reset();
        setIsBlocking(false);
      }}
    >
      <NavigationPrompt when={isBlocking}>
        {({ onConfirm, onCancel }) => (
          <ConfirmNavigationModal onCancel={onCancel} onConfirm={onConfirm} />
        )}
      </NavigationPrompt>
      <p>
        Blocking?
        {isBlocking ? "Yes, click a link or the back button" : "Nope"}
      </p>
      <p>
        <input
          size="50"
          placeholder="type something to block transitions"
          onChange={event => {
            setIsBlocking(event.target.value.length > 0);
          }}
        />
      </p>
      <p>
        <button>Submit to stop blocking</button>
      </p>
    </form>
  );
}

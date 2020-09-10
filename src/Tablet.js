import React from "react";
import LazyLoad from "react-lazy-load";

export default function Tablet() {
  return (
    <div className="App">
      <h2>Hello there!</h2>
      <p>
        <em>Can</em> you read this?
        <LazyLoad fallback={<p>waiting..</p>}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6Tlj4-PhLI9mK7L4SqXRXavWiMw6BbTTC4Q&usqp=CAU" />
        </LazyLoad>
      </p>
    </div>
  );
}

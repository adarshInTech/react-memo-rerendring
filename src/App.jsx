import React, { useState } from "react";

function App() {
  //create a state variable
  const [title, setTitle] = useState("hello how are you");

  function updateTitle() {
    setTitle(`my name is ${Math.random()}`);
  }
  return (
    // React.Fragment
    <div>
      <button onClick={updateTitle}>Update the Title</button>
      <Header title={title} />
      <Header title="this is a example" />
      <Header title="this is a example" />
      <Header title="this is a example" />
      <Header title="this is a example" />
      <Header title="this is a example" />
      <Header title="this is a example" />
    </div>
  );
}

// function Header(props) {
//
//   return <div>{props.title}</disv>;
// }
// export default App;
// create a react app that has a header component that takes as a prop and renders it inside a div
// the top level app component renders 2 headers
// use a button to update the first header
//this example is called object destructuring it has slightly cleaner syntax
const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;

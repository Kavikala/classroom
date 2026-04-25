import React from "react";
import ReactDOM from "react-dom/client";

const reactH1 = React.createElement("h1", {}, "I am h1 using react");
const findDiv = document.createElement("div");
findDiv.id = "react-Id";
const reactDom = ReactDOM.createRoot(findDiv);
reactDom.render(reactH1);
document.body.appendChild(findDiv);

const createH1 = React.createElement("h1", {},
  React.createElement("h2", {},
    React.createElement("h3", {}, "I am H3")
  )
);

const createDom = document.createElement("div");
createDom.className = "title";
document.body.appendChild(createDom);

const rootDom = ReactDOM.createRoot(createDom);
rootDom.render(createH1);

const varName = (
  <div className="title">
    <h3>
      <h2>
        <h1>i am h1</h1>
      </h2>
    </h3>
  </div>
);

const Restfun = () => {
  const varK = { color: "red" };
  return (
    <div className="title">
      <h3>
        <h2>
          <h1 style={varK}>i am h</h1>
        </h2>
      </h3>
    </div>
  );
};

const Test=()=>{
    const Ase=2;
    return (
        <>
        {console.log(Ase)}
        <Restfun/>
        </>
    );
  };
// Render to the existing HTML div instead of creating new ones
const recreate = document.getElementById("createDiv");
const recreateDom = ReactDOM.createRoot(recreate);
recreateDom.render(<Test />);



    

        const reactH1=React.createElement("h1", {}, "I am h1 using react");
        const findDiv=document.createElement("div");
        findDiv.id="react-Id";
        const reactDom=ReactDOM.createRoot(findDiv);
        reactDom.render(reactH1);
        document.body.appendChild(findDiv);
    
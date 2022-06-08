const React = require("react");
const ReactDOM = require("react-dom/client");
const GuGuDan = require("./GuGuDan");

// ReactDOM.render(<LikeButton />, document.querySelector("#root")); // React ver.17
ReactDOM.createRoot(document.querySelector("#root")).render(<GuGuDan />); // React ver.18

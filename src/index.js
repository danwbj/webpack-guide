import _ from "lodash";
import printMe from "./print.js";
import "./styles.css";
function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me---pppp!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}

import _ from "lodash";
import { cube } from "./math.js";
import "./styles.css";
function component() {
  var element = document.createElement("div");
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}

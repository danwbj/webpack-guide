import _ from "lodash";
import "./styles.css";
function component() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack0000"], " ");

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept();
}

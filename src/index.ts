import * as _ from "lodash";
import "./styles.css";
async function getComponent() {
  var element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

// document.body.appendChild(component());

getComponent().then(component => {
  document.body.appendChild(component);
});

declare var module: any;
if (module.hot) {
  module.hot.accept();
}

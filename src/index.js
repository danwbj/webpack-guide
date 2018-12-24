// import _ from "lodash";
import "./styles.css";
async function getComponent() {
  // var element = document.createElement("div");
  // element.innerHTML = _.join(["Hello", "webpack0000"], " ");

  // return element;
  var element = document.createElement("div");
  const _ = await import(/* webpackChunkName: "lodash" */ "lodash");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

// document.body.appendChild(component());

getComponent().then(component => {
  document.body.appendChild(component);
});

if (module.hot) {
  module.hot.accept();
}

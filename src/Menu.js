import React from "react";
import Mcat from "./Mcat";
import data from './data/menu';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.witnesManipulator = this.witnesManipulator.bind(this);
  }


  witnesManipulator(e) {
    e.preventDefault();
    var elt = e.target;
    var WITNESS = document.getElementById("witness")

    if (elt.id === "home" && WITNESS) {
      WITNESS = document.getElementById("witness")
      WITNESS.classList.add("go-home");
      WITNESS.click();
      return;
    }

    if (elt.tagName === "A" && elt.getAttribute("data-link") && WITNESS && !elt.classList.contains("home-link")) {
      WITNESS = document.getElementById("witness");
      WITNESS.setAttribute("data-link", encodeURIComponent(elt.getAttribute("data-link")));
      if (WITNESS.classList.contains("link-of-home")) {
        WITNESS.classList.remove("link-of-home")
      }

      WITNESS.classList.add("link-to-cat");
      WITNESS.click();
      return;
    }

    if (elt.classList.contains("home-link") && WITNESS) {
      WITNESS = document.getElementById("witness");
      WITNESS.setAttribute("data-link", elt.getAttribute('data-link'));
      WITNESS.classList.add("link-of-home");
      WITNESS.click();
      return;
    }

  }

  render() {
    var lis = data.map((value, index) => (
      <Mcat
        key={index}
        name={value.name}
        state={value.state}
        idName={value.idName}
        subLinks={value.subLinks}
      />
    ));

    return (
      <nav id="sidebar" onClick={this.witnesManipulator}>
        <div className="sidebar-header">
          <h3><a href="/meow" id="home"><i className="fas fa-home text-white"></i> 69TORX</a></h3>
        </div>
        <ul className="list-unstyled components">{lis}</ul>
      </nav>
    );
  }
}
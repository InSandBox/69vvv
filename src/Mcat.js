import React from "react";
import Mlink from "./Mlink";

export default class Mcat extends React.Component {
  render() {
    var subLinks = undefined;
    if (this.props.subLinks) {
      subLinks = this.props.subLinks.map((value, index) => (
        <Mlink key={index} link={value.link} name={value.name}  classx={value.classx? value.classx : "" }/>
      ));
    }

    return (
      <li className={this.props.state}>
        <a
          href={`#${this.props.idName}`}
          data-toggle="collapse"
          aria-expanded="false"
          className="dropdown-toggle"
        >
          {this.props.name}
        </a>
        {subLinks && (
          <ul className="collapse list-unstyled" id={this.props.idName}>
            {subLinks}
          </ul>
        )}
      </li>
    );
  }
}
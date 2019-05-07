import React from "react";

export default class Mlink extends React.Component {
  render() {
    return (
      <li>
        <a className={`${this.props.classx}`} data-link={encodeURIComponent(this.props.link)} href="/meow">{this.props.name}</a>
      </li>
    );
  }
}
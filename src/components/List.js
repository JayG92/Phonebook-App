import React, { Component } from "react";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <div className={"listArea"}>
        <input
          name={"filter"}
          id={"filter"}
          placeholder={"Filter by name or phone number"}
        />
        <ul className={"list"}>
          <li>
            <span className={"name"}> Jay guevara </span>
            <span className={"phone"}> 555-555-5555 </span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}> Michael Jordan </span>
            <span className={"phone"}> 555-555-5555 </span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}> Larry Bird </span>
            <span className={"phone"}> 555-555-5555 </span>
            <span className={"clearfix"}></span>
          </li>
          <li>
            <span className={"name"}> Bo Jackson </span>
            <span className={"phone"}> 555-555-5555 </span>
            <span className={"clearfix"}></span>
          </li>
        </ul>
      </div>
    );
  }
}

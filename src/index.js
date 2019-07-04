import React from "react";
import ReactDOM from "react-dom";
import { songDecoder } from "./6KYU/Dubstep";
import { findEvenIndex } from "./6KYU/EqualSidesOfAnArray";
import { partsSums } from "./6KYU/SumOfParts";
import { sqInRect } from "./6KYU/RectangleIntoSquare.js";
import { SpreadNumbers } from "./6KYU/SpreadNumbers.js";
import { isTriangle } from "./7KYU/Triangle";
import { printerError } from "./7KYU/printerError";
import { dir } from "./5KYU/DirectionsReduction";
import { oC } from "./7KYU/orderedCount";
import { sortAndTransform } from "./7KYU/sortAndTransform";
import { change } from "./7KYU/looseChange.js";
import { bal } from "./6KYU/balance.js";
import { ValidWalk } from "./6KYU/isValidWalk";
import { disarium } from "./7KYU/disariumNumber";
import { LeapYear } from "./7KYU/isLeapYear";
import { dup } from "./7KYU/duplicates";
import { duplicateE } from "./6KYU/duplicateEncode";
import { iq } from "./6KYU/iqTest";
import { pig } from "./5KYU/pigIt";
import { human } from "./5KYU/humanReadable";
import { valid } from "./5KYU/validParentheses";
import { passTheDoorMan } from "./7KYU/passTheDoorMan";
import "./styles.css";

function App() {
  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" },
];

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        label={ctrl.label}
        key={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabledInfo={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button
      disabled={!props.purchaseable}
      className={classes.OrderButton}
      onClick={props.ordered}
    >
      Order Now
    </button>
  </div>
);

export default BuildControls;

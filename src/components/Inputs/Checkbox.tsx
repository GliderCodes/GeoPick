import * as React from "react";
import {
  Checkbox as MatCheckbox,
  withStyles,
  CheckboxProps,
} from "@material-ui/core";

const WhiteCheckbox = withStyles({
  root: {
    color: "white",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
})((props: CheckboxProps) => <MatCheckbox color="default" {...props} />);

function Checkbox(props: CheckboxProps) {
  return <WhiteCheckbox {...props} />;
}

export default Checkbox;

import React from "react";
import { IconButton, ButtonBaseProps } from "@material-ui/core";
import { ArrowForwardRounded } from "@material-ui/icons";

const ForwardBtn: React.FunctionComponent<ButtonBaseProps> = () => {
  return (
    <IconButton aria-label="forward">
      <ArrowForwardRounded />
    </IconButton>
  );
};

export default ForwardBtn;

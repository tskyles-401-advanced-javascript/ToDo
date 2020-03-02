import jwt from "jsonwebtoken";
import React, { useContext } from "react";
import { SettingsContext } from "../../context/settings";
import { If, Then } from "../if/index";

const Auth = props => {
  const context = useContext(SettingsContext);

  let okToRender = false;
  let user = {};

  try {
    user = context.userToken
      ? jwt.verify(context.userToken, 'supersecret')
      : {};
    okToRender =
      context.login &&
      (props.capability ? user.capabilities.includes(props.capability) : true);
  } catch (e) {}

  return (
    <If condition={okToRender}>
      <Then>
        <div>{props.children}</div>
      </Then>
    </If>
  );
};

export default Auth;

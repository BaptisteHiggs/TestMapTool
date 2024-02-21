import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MapboxTokenState, setKey } from "../store/slice";
import classes from "./TokenInput.module.scss";

export const TokenInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setKey(event.target.value));
    setText(event.target.value);
  };

  return (
    <div className={classes["tokenInputDiv"]}>
      <form className={classes["form"]}>
        <label className={classes["label"]} htmlFor="text-input">
          Enter Mapbox Access Token:
        </label>
        <br /> <br />
        <input
          className={classes["input"]}
          type="text"
          id="text-input"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

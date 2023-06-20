import React from "react";
import { Wrapper, Input, Label } from "./InputWidget.Styles";

const InputWidget = ({
  label,
  width,
  height,
  placeholder,
  type,
  name,
  defaultValue,
  required,
  onChange,
}) => {
  return (
    <>
      <Wrapper>
        <Label>
          <h6>{label}</h6>
        </Label>
        <Input
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          width={width}
          height={height}
          defaultValue={defaultValue}
          // onChange={(e) => onChange(e)}
          required={required ? required : ""}
        />
      </Wrapper>
    </>
  );
};

export default InputWidget;

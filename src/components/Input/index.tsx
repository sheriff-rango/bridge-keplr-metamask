import React, { useState } from "react";

import { Wrapper, Label, Input as StyledInput, FocusBorder } from "./styled";

interface InputProps {
  type?: "text";
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type,
  defaultValue,
  onChange,
  ...rest
}) => {
  const [hasContent, setHasContent] = useState<boolean>(!!defaultValue);

  const handleChangeInputValue = (e: any) => {
    const {
      target: { value },
    } = e;
    setHasContent(!!value);
    if (onChange) onChange(e);
  };

  return (
    <Wrapper>
      <StyledInput
        hasContent={hasContent}
        placeholder=""
        type={type || "text"}
        onChange={handleChangeInputValue}
        defaultValue={defaultValue}
        {...rest}
      />
      {placeholder && <Label>{placeholder}</Label>}
      <FocusBorder />
    </Wrapper>
  );
};

export default Input;

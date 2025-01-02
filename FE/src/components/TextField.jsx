import React from "react";
import { Lock } from "@mui/icons-material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import { Icon } from "@mui/material";
import {
  FieldWrapper,
  LabelText,
  Fieldstyle,
  errorColor,
} from "../styles/index.jsx";


export const TextInputIcon = ({ label, fieldName, field, errors, required, placeholder, icon }) => {
  return (
    <div style={FieldWrapper}>
      <Typography sx={LabelText}>
        {label} {required && <span style={errorColor}>*</span>}
      </Typography>
      <OutlinedInput
        {...field(fieldName)}
        sx={Fieldstyle}
        placeholder={placeholder}
        startAdornment={
          <InputAdornment position="start">
            <Icon>
              {icon}
            </Icon>
          </InputAdornment>
        }
      />
      {errors[fieldName] && (
        <FormHelperText sx={errorColor}>
          {errors[fieldName].message}
        </FormHelperText>
      )}
    </div>
  );
};

export const TextInputSearch = ({ placeholder, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(value);

  };
  return (
    <OutlinedInput
      size="small"
      className="w-full md:w-[250px]"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export const PasswordInput = ({ label, fieldName, field, errors, required, placeholder }) => {
  const [showPassword] = React.useState(false);

  return (
    <div style={FieldWrapper}>
      <Typography sx={LabelText}>
        {label} {required && <span style={errorColor}>*</span>}
      </Typography>
      <OutlinedInput
        {...field(fieldName)}
        type={showPassword ? "text" : "password"}
        startAdornment={
          <InputAdornment position="start">
            <Icon>
              <Lock />
            </Icon>
          </InputAdornment>
        }
        placeholder={placeholder}
        sx={Fieldstyle}
      />
      {errors[fieldName] && (
        <FormHelperText sx={errorColor}>
          {errors[fieldName].message}
        </FormHelperText>
      )}
    </div>
  );
};

import Button from "@mui/material/Button";
import { buttonStyle } from "../styles/index"
import { Icon } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export function DarkButton({ text, type, url }) {
  return (
    <Button
      sx={{ ...buttonStyle, bgcolor: "#351C43" }}
      type={type}
      {...(type === "submit" ? null : { href: url })}
      variant="contained">
      {text}
    </Button>
  );
}

export function LightButton({ text, type, url }) {
  return (
    <Button
      sx={{ ...buttonStyle, bgcolor: "#9F5BC2" }}
      type={type}
      {...(type === "submit" ? null : { href: url })}
      variant="contained">
      {text}
    </Button>
  );
}

export function DarkButtonIcon({ text, type, url, icon }) {
  return (
    <Button
      sx={{ ...buttonStyle, bgcolor: "#351C43" }}
      type={type}
      {...(type === "submit" ? null : { href: url })}
      variant="contained"
      startIcon={icon}>
      {text}
    </Button>
  );
}

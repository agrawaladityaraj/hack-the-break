import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyTextField = styled(TextField)({
  border: "3px solid black",
  backgroundColor: "white",
  borderRadius: "8px",
  "& label.Mui-focused": {
    color: "transparent",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
});

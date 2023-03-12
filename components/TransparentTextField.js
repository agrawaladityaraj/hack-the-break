import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TransparentTextField = styled(TextField)({
  backgroundColor: "transparent",
  "& label.Mui-focused": {
    color: "transparent",
  },
});

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyButton = styled(Button)({
  backgroundColor: "#52796F",
  border: "3px solid black",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#ef8354",
    border: "3px solid black",
  },
});

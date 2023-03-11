import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import "@/styles/globals.css";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto Mono, sans-serif",
  },
});
theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

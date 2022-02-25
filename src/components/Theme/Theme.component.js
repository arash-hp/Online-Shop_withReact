import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { faIR } from '@mui/material/locale'

const Theme = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: "IRANSans",
    },
    direction: 'rtl',
  }, faIR);


  return (
    <ThemeProvider theme={theme} >
      {props.children}
    </ThemeProvider>
  );
}

export { Theme };
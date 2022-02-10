import { AppRoute } from './route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material/styles';
import { CustomTheme } from './asset/styles/CustomTheme';
// import FontIran from './asset/fonts/FontIran/FontIran.module.scss';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import './asset/fonts/FontIran/FontIran.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return <>
    {/* <CssBaseline /> */}
    <Provider store={store}>
      <ThemeProvider theme={CustomTheme} >
        <StyleSheetManager stylisPlugins={[rtlPlugin]}>
          <BrowserRouter>
            <AppRoute />
            <ToastContainer
              position='buttom-left'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </BrowserRouter>
        </StyleSheetManager>
      </ThemeProvider>
    </Provider>

  </>
}

export default App;

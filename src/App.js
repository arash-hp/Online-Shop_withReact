import { CssBaseline } from '@mui/material';
import { jssPreset, StylesProvider, ThemeProvider } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './asset/fonts/FontIran/FontIran.css';
import { CustomTheme } from './asset/styles/CustomTheme';
import { whoami } from './redux/actions/UserAction';
import store from './redux/store';
import { AppRoute } from './route/AppRoute';
import history from './services/history.service';




const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const initApp = async () => {
  try {
    console.log('init')
    await store.dispatch(whoami())
  } catch (e) {
    return Promise.reject(e);

  }
}

(() => initApp())()

function App() {
  return <>
    {/* <CssBaseline /> */}
    <Provider store={store}>
      <StylesProvider jss={jss} >
        <ThemeProvider theme={CustomTheme}>
          <BrowserRouter history={history}>
            <CssBaseline />
            <AppRoute />
            <ToastContainer
              position='bottom-left'
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
        </ThemeProvider>
      </StylesProvider>
    </Provider>

  </>
}

export default App;

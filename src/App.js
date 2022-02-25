import { CssBaseline } from '@mui/material';
import { jssPreset, StylesProvider, ThemeProvider } from '@mui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { CustomTheme } from './asset/styles/CustomTheme';
import { whoami } from './redux/actions/UserAction';
import store from './redux/store';
import { AppRoute } from './route/AppRoute';
import history from './services/history.service';
import rtlPlugin from 'stylis-plugin-rtl';
import { StyleSheetManager } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import { Rtl } from './components/Rtl/Rtl.componetn';

const theme = createTheme({
  direction: 'rtl',
});


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
    <Provider store={store}>
      <Rtl>
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
      </Rtl>
    </Provider>

  </>
}

export default App;

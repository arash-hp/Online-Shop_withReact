import { AppRoute } from './route/AppRoute';
import { unstable_HistoryRouter as BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';

import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './asset/fonts/FontIran/FontIran.css';
import 'react-toastify/dist/ReactToastify.css';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';
import { CustomTheme } from './asset/styles/CustomTheme';


import './App.css';
import { whoami } from './redux/actions/UserAction';
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
          <StyleSheetManager stylisPlugins={[rtlPlugin]}>
            <BrowserRouter history={history}>
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
          </StyleSheetManager>
        </ThemeProvider>
      </StylesProvider>
    </Provider>

  </>
}

export default App;

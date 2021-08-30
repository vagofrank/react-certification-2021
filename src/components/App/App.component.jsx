import React, {useLayoutEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import DisplayPage from '../../pages/Display/Display.page';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../Theme/GlobalStyles";
import { lightTheme, darkTheme } from "../Theme/Theme";
import  {useDarkMode} from "../Theme/UseDarkMode";


function App() {

  //const [theme, setTheme] = useState('light');
  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  /*const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }*/

  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>



    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Private exact path="/display">
              <DisplayPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>

    </>  
    </ThemeProvider>

  );
}

export default App;

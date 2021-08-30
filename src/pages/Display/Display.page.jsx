import React, { useState} from "react";
import { Link,useHistory } from "react-router-dom";
import {Header} from '../../components/Header/Toolbar.component';
import Player from "../../components/Player/Player";
import SearchBar from "../../components/Player/SearchBar";
import youtube from '../../components/Player/youtube';

import Toggle from "../../components/Theme/Toggler";
import { lightTheme, darkTheme } from "../../components/Theme/Theme";
import  {useDarkMode} from  "../../components/Theme/UseDarkMode";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../components/Theme/GlobalStyles";
import { useAuth } from '../../providers/Auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignOutAlt} from '@fortawesome/fontawesome-free-solid'

function DisplayPage() {
  
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const [videos, setVideos] = useState([]);

  const handleSubmit = async (termFromSearchBar) => {
      const response = await youtube.get('/search', {
          params: {
              q: termFromSearchBar
          }
      })
      setVideos(response.data.items)
  };

  const { logout } = useAuth();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
      <Header>
        <div className="row">
            <div className="col-2 col-md-4" style={{zIndex: 50000}}>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul id="menu" className="menu" style={{zIndex: 50000}}>
                    <li><Link to="/display" className="linkText"><i><FontAwesomeIcon icon={faHome}/></i><span className="displayed">Home</span></Link></li>
                    <li><Link to="/" className="linkText" onClick={deAuthenticate}><i><FontAwesomeIcon icon={faSignOutAlt}/></i><span className="displayed">Logout</span></Link></li>
                </ul>
          </div>

          <div className="col-6 col-md-6">
            <SearchBar handleFormSubmit={handleSubmit}/>
          </div>
          
          <div className="col-4 col-md-2"><Toggle theme={theme} toggleTheme={themeToggler} />
          </div>
        
        </div>
      </Header>

      <Player videos={videos}></Player>    


      </>
      </ThemeProvider>

  );
}

export default DisplayPage;

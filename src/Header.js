import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar, IconButton } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
        <img src="https://inoxcongsang.com/wp-content/uploads/2018/04/icon-face-trang-suc-inox-csj.png" alt="" />

        </div>
        
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option  header__option--active">
          <HomeIcon />
        </div>
        
        <div className="header__option">
          <HomeIcon />
        </div>

        <div className="header__option">
          <HomeIcon />
        </div>

        <div className="header__option">
          <HomeIcon />
        </div>

      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} alt={user.displayName} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
      
    </div>
  )
}


export default Header

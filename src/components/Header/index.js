import {FaMoon} from 'react-icons/fa'

import {IoSunnyOutline} from 'react-icons/io5'

import {
  NavContainer,
  HeaderLogo,
  ThemeBtn,
  ProfileImg,
  LogoutBtn,
  ThemeContainer,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'

const style = {
  color: '#FFFFFf',
}

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme, changeTheme} = value

      return (
        <NavContainer theme={theme}>
          <HeaderLogo
            src={
              theme === 'light'
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            }
            alt="nxt watch logo"
          />
          <ThemeContainer>
            {/* eslint-disable-next-line */}
            <ThemeBtn type="button" onClick={() => changeTheme()}>
              {theme === 'light' ? (
                <FaMoon />
              ) : (
                <IoSunnyOutline style={style} />
              )}
            </ThemeBtn>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <LogoutBtn theme={theme} type="button">
              Logout
            </LogoutBtn>
          </ThemeContainer>
        </NavContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Header

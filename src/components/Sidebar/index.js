import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtwatchContext'

import {
  SidebarContainer,
  OptionsContainer,
  Option,
  ContactUsContainer,
  ContactUsDesc,
  LogoContainer,
  SocialMediaLogo,
  OptionText,
} from './styledComponent'

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme, getActiveOption, activeOption} = value

      return (
        <SidebarContainer theme={theme}>
          <OptionsContainer>
            <Option
              type="button"
              theme={theme}
              isActive={activeOption === 'Home'}
              onClick={() => getActiveOption('Home')}
            >
              <AiFillHome />
              <OptionText>Home</OptionText>
            </Option>
            <Option
              type="button"
              theme={theme}
              isActive={activeOption === 'Trending'}
              onClick={() => getActiveOption('Trending')}
            >
              <HiFire />
              <OptionText>Trending</OptionText>
            </Option>
            <Option
              type="button"
              theme={theme}
              isActive={activeOption === 'Gaming'}
              onClick={() => getActiveOption('Gaming')}
            >
              <SiYoutubegaming />
              <OptionText>Gaming</OptionText>
            </Option>
            <Option
              type="button"
              theme={theme}
              isActive={activeOption === 'Saved videos'}
              onClick={() => getActiveOption('Saved videos')}
            >
              <MdPlaylistAdd />
              <OptionText>Saved videos</OptionText>
            </Option>
          </OptionsContainer>
          <ContactUsContainer theme={theme}>
            <ContactUsDesc>CONTACT US</ContactUsDesc>
            <LogoContainer>
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogoContainer>
            <ContactUsDesc>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsDesc>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar

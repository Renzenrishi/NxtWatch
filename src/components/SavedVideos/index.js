import {Component} from 'react'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import {Content} from '../Home/styledComponent'
import Sidebar from '../Sidebar'

import {TrendingContainer, Banner, Icon} from '../Trending/styledComponents'

import NxtWatchContext from '../../context/NxtwatchContext'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <>
              <Header />
              <Content>
                <Sidebar />
                <TrendingContainer theme={theme} data-testid="home">
                  <Banner theme={theme}>
                    <Icon theme={theme}>
                      <HiFire />
                    </Icon>
                    <h1>Saved Videos</h1>
                  </Banner>
                </TrendingContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos

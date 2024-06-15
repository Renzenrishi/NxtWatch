import {Component} from 'react'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import {Content} from '../Home/styledComponent'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtwatchContext'

import {TrendingContainer, Banner, Icon} from '../Trending/styledComponents'

class Gaming extends Component {
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
                    <h1>Gaming</h1>
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

export default Gaming

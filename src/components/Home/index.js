import {Component} from 'react'

import './index.css'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {Content, HomeContainer} from './styledComponent'
import NxtWatchContext from '../../context/NxtwatchContext'

class Home extends Component {
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
                <HomeContainer theme={theme} data-testid="home">
                  <div className="banner-container">
                    <div className="BannerContent">
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                        className="banner-logo"
                      />
                      <p className="BannerPara">
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </p>
                      <button type="button" className="GetItNowBtn">
                        GET IT NOW
                      </button>
                    </div>
                    {/* eslint-disable-next-line */}
                    <button type="button" className="CloseBtn">
                      <IoMdClose />
                    </button>
                  </div>
                </HomeContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home

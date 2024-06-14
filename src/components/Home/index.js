import {Component} from 'react'

import {IoIosSearch, IoMdClose} from 'react-icons/io'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import './index.css'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {
  Content,
  HomeContainer,
  SearchBar,
  SearchInputContainer,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'
import HomeVideoItem from '../HomeVideoItem'

class Home extends Component {
  state = {
    apiStatus: '',
    searchInputVal: '',
    homeVideosData: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getSearchInput = event => {
    this.setState({searchInputVal: event.target.value})
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: 'LOADING'})

    const {searchInputVal} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInputVal}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const videosList = data.videos

      const updatedVideosList = videosList.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({apiStatus: 'SUCCESS', homeVideosData: updatedVideosList})
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSearchInput = () => {
    const {searchInputVal} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <SearchInputContainer>
              <SearchBar
                type="search"
                value={searchInputVal}
                placeholder="Search"
                onChange={this.getSearchInput}
                theme={theme}
              />
              <IoIosSearch />
            </SearchInputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderSuccessView = () => {
    const {homeVideosData} = this.state

    return (
      <ul className="HomeVideosContainer">
        {homeVideosData.map(each => (
          <HomeVideoItem details={each} key={each.id} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="FailureContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure"
      />
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return this.renderLoadingView()
    }
  }

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
                  <div className="HomePageContent">
                    {this.renderSearchInput()}
                    {this.renderApiStatus()}
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

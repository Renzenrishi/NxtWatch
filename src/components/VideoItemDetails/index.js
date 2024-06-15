import './index.css'

import {Component} from 'react'

import ReactPlayer from 'react-player'

import {formatDistanceToNowStrict} from 'date-fns'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {BiLike, BiDislike} from 'react-icons/bi'

import {MdPlaylistAdd} from 'react-icons/md'

import Header from '../Header'

import Sidebar from '../Sidebar'

import {Content, FailureContainer, FailureImg} from '../Home/styledComponent'

import {
  VideoContainer,
  ViewsContainerVideoDetails,
  ViewsAndLikeBtnContainer,
} from './styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'

import {Views} from '../HomeVideoItem/styledComponent'

class VideoItemDetails extends Component {
  state = {
    apiStatus: '',
    videosDetailsData: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: 'LOADING'})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()

      const each = data.video_details

      const updatedVideosDetails = {
        id: each.id,
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          subscriberCount: each.channel.subscriber_count,
        },
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        videoUrl: each.video_url,
        description: each.description,
      }

      this.setState({
        apiStatus: 'SUCCESS',
        videosDetailsData: updatedVideosDetails,
      })
    } else {
      this.setState({apiStatus: 'FAILURE'})
    }
  }

  renderSuccessView = () => {
    const {videosDetailsData} = this.state

    const {
      videoUrl,
      publishedAt,
      title,
      viewCount,
      channel,
      description,
    } = videosDetailsData

    const {name, profileImageUrl, subscriberCount} = channel

    const getDate = () => formatDistanceToNowStrict(new Date(publishedAt))

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {theme} = value

          return (
            <div className="VideoPlayer">
              <ReactPlayer height="600px" width="1100px" url={videoUrl} />
              <p>{title}</p>
              <ViewsAndLikeBtnContainer theme={theme}>
                <ViewsContainerVideoDetails>
                  <Views>{viewCount} views</Views>
                  <li>{getDate(publishedAt)} ago</li>
                </ViewsContainerVideoDetails>
                <div className="LikeShareBtnContainer">
                  <button type="button" className="LikeBtn">
                    <BiLike />
                    <span>Like</span>
                  </button>
                  <button type="button" className="LikeBtn">
                    <BiDislike />
                    <span>Dislike</span>
                  </button>
                  <button type="button" className="LikeBtn">
                    <MdPlaylistAdd />
                    <span>Save</span>
                  </button>
                </div>
              </ViewsAndLikeBtnContainer>
              <hr />
              <div className="VideoDetailsDescContainer">
                <img
                  src={profileImageUrl}
                  alt={title}
                  className="VideoDetailsItemProfileImg"
                />
                <div>
                  <p className="VDChannelName">{name}</p>
                  <p>{subscriberCount} subscribers</p>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <FailureContainer theme={theme}>
            <FailureImg
              src={
                theme === 'light'
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              }
              alt="failure"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We are having some trouble to complete your request</p>
            <p>Please try again</p>
            <button
              type="button"
              className="RetryBtn"
              onClick={this.getVideoDetails}
            >
              Retry
            </button>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
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
                <VideoContainer theme={theme}>
                  {this.renderApiStatus()}
                </VideoContainer>
              </Content>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
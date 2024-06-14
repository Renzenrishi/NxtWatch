import {formatDistanceToNowStrict} from 'date-fns'

import NxtWatchContext from '../../context/NxtwatchContext'

import {
  VideoItem,
  VideoItemDescContainer,
  ProfileImg,
  VideoItemDesc,
  VideoTitle,
  ChannelName,
  ViewsContainer,
  Views,
} from './styledComponent'

const HomeVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {theme} = value

      const {details} = props

      const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details

      const {name, profileImageUrl} = channel

      const getDate = () => formatDistanceToNowStrict(new Date(publishedAt))
      return (
        <VideoItem>
          <img src={thumbnailUrl} alt={channel} />
          <VideoItemDescContainer>
            <ProfileImg src={profileImageUrl} alt="profile" />
            <VideoItemDesc theme={theme}>
              <VideoTitle>{title}</VideoTitle>
              <ChannelName>{name}</ChannelName>
              <ViewsContainer>
                <Views>{viewCount} views</Views>
                <li>{getDate()} ago</li>
              </ViewsContainer>
            </VideoItemDesc>
          </VideoItemDescContainer>
        </VideoItem>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default HomeVideoItem

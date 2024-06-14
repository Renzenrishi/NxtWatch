import './index.css'

import {formatDistanceToNow} from 'date-fns'

const HomeVideoItem = props => {
  const {details} = props

  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = details

  const {name, profileImageUrl} = channel

  const getDate = () => formatDistanceToNow(new Date(publishedAt))

  return (
    <li className="VideoItem">
      <img src={thumbnailUrl} alt={channel} />
      <div className="VideoItemDescContainer">
        <img src={profileImageUrl} alt="profile" />
        <div className="VideoItemDesc">
          <p>{title}</p>
          <p>{name}</p>
          <div className="ViewsContainer">
            <p>{viewCount}</p>
            <p>{getDate(publishedAt)}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HomeVideoItem

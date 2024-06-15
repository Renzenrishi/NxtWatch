import {Link} from 'react-router-dom'

import '../Home/index.css'

import {
  GameItem,
  GameThumbNail,
  GameTitle,
  GameViews,
} from '../Gaming/styledComponent'

import NxtWatchContext from '../../context/NxtwatchContext'

const GameVideoItem = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {theme} = value

        return (
          <Link className="linkItem" to={`/videos/${id}`}>
            <GameItem>
              <GameThumbNail src={thumbnailUrl} alt={title} />
              <GameTitle theme={theme}>{title}</GameTitle>
              <GameViews>{viewCount} Watching Worldwide</GameViews>
            </GameItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameVideoItem
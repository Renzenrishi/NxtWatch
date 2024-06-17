import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  hideBanner: false,
  closeBanner: () => {},
  activeOption: '',
  getActiveOption: () => {},
  savedVideosIdList: [],
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  addLikeId: () => {},
  addDislikeId: () => {},
})

export default NxtWatchContext

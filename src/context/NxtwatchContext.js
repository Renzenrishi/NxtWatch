import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  hideBanner: false,
  closeBanner: () => {},
  activeOption: '',
  getActiveOption: () => {},
  likeAndDislikeBtn: '',
  saveBtn: false,
  changeSaveBtn: () => {},
  savedVideosIdList: [],
  savedVideosList: [],
})

export default NxtWatchContext

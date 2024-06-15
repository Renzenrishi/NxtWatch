import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  activeOption: 'Home',
  getActiveOption: () => {},
  likeAndDislikeBtn: '',
  saveBtn: false,
  changeSaveBtn: () => {},
  savedVideosList: [],
})

export default NxtWatchContext

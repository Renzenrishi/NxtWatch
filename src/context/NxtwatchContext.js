import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  activeOption: '',
  getActiveOption: () => {},
  likeAndDislikeBtn: '',
  saveBtn: false,
  changeSaveBtn: () => {},
  savedVideosList: [],
})

export default NxtWatchContext

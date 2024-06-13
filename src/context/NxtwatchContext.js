import React from 'react'

const NxtWatchContext = React.createContext({
  theme: 'light',
  changeTheme: () => {},
  activeOption: 'Home',
  getActiveOption: () => {},
})

export default NxtWatchContext

import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './context/NxtwatchContext'

import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'

import Gaming from './components/Gaming'

class App extends Component {
  state = {
    theme: 'light',
    activeOption: '',
    hideBanner: false,
    likedVideosList: [],
    dislikedVideosList: [],
    savedVideosIdList: [],
    savedVideosList: [],
  }

  addLikeId = id => {
    const {dislikedVideosList} = this.state

    if (dislikedVideosList.includes(id)) {
      this.setState(prevState => ({
        dislikedVideosList: prevState.dislikedVideosList.filter(
          each => each !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        likedVideosList: [...prevState.likedVideosList, id],
      }))
    }
  }

  addDislikeId = id => {
    const {likedVideosList} = this.state

    if (likedVideosList.includes(id)) {
      this.setState(prevState => ({
        likedVideosList: prevState.likedVideosList.filter(each => each !== id),
      }))
    } else {
      this.setState(prevState => ({
        dislikedVideosList: [...prevState.dislikedVideosList, id],
      }))
    }
  }

  closeBanner = () => {
    this.setState({hideBanner: true})
  }

  changeTheme = () => {
    const {theme} = this.state

    if (theme === 'dark') {
      this.setState({theme: 'light'})
    } else {
      this.setState({theme: 'dark'})
    }
  }

  getActiveOption = value => {
    this.setState({activeOption: value})
  }

  addVideoToSaveList = (videoItem, id) => {
    const {savedVideosList} = this.state

    const findVideoItem = savedVideosList.find(each => each.id === videoItem.id)

    if (findVideoItem === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
        savedVideosIdList: [...prevState.savedVideosIdList, id],
      }))
    } else {
      this.setState(prevState => ({
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== videoItem.id,
        ),
        savedVideosIdList: prevState.savedVideosIdList.filter(
          each => each !== videoItem.id,
        ),
      }))
    }
  }

  render() {
    const {
      theme,
      activeOption,
      hideBanner,
      likedVideosList,
      dislikedVideosList,
      savedVideosList,
      savedVideosIdList,
    } = this.state

    console.log(savedVideosList)
    console.log(savedVideosIdList)

    return (
      <NxtWatchContext.Provider
        value={{
          theme,
          activeOption,
          hideBanner,
          likedVideosList,
          dislikedVideosList,
          savedVideosList,
          savedVideosIdList,
          closeBanner: this.closeBanner,
          changeTheme: this.changeTheme,
          getActiveOption: this.getActiveOption,
          addLikeId: this.addLikeId,
          addDislikeId: this.addDislikeId,
          addVideoToSaveList: this.addVideoToSaveList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App

import styled from 'styled-components'

export const GameThumbNail = styled.img`
  height: 50vh;
`

export const GamingVideosContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
`

export const GameItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;
`

export const GameTitle = styled.p`
  color : ${props => (props.theme === 'light' ? '' : '#ffffff')}
  margin-bottom: 2px;
`

export const GameViews = styled.p`
  margin-top: 0px;
  color: #616e7c;
`

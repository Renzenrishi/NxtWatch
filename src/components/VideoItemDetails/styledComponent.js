import styled from 'styled-components'

export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
  padding: 20px;
`

export const He = styled.h1``

export const ViewsContainerVideoDetails = styled.ul`
  margin-top: 0px;
  list-style-type: disc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  color: #616e7c;
`

export const ViewsAndLikeBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => (props.theme === 'light' ? '' : '#f9f9f9')};
`

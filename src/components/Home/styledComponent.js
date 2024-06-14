import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 93vh;
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
`

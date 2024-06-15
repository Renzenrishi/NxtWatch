import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  font-family: 'Roboto';
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

export const SearchBar = styled.input`
  padding: 5px;
  width: 25vw;
  outline: none;
  border-color: ${props => (props.theme === 'light' ? '#7e858e' : '#606060')};
  border-style: solid;
  background-color: transparent;
  color: ${props => (props.theme === 'light' ? '#0f0f0f' : '#cbd5e1')};
`
export const SearchBtn = styled.button`
  height: 31px;
  width: 50px;
  cursor: pointer;
  background-color: ${props => (props.theme === 'light' ? '' : '#606060')};
`
export const NoSearchHeading = styled.h1`
  color: ${props => (props.theme === 'light' ? '#1e293b' : '#cbd5e1')};
  font-size: 20px;
`
export const NoSearchText = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#475569')};
  font-size: 18px;
`

export const FailureContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === 'light' ? '#1e293b' : '#cbd5e1')};
`

export const FailureImg = styled.img`
  height: 50vh;
`

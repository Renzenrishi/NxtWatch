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
  width: 84vw;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : ' #000000'};
`

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SearchBar = styled.input`
  padding: 5px;
  width: 25vw;
  margin-right: 10px;
  outline: none;
  border-color: #7e858e;
  border-style: solid;
  background-color: transparent;
  color: #cbd5e1;
`

import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
`

export const HeaderLogo = styled.img`
  height: 6vh;
`

export const ThemeBtn = styled.button`
  background-color: transparent;
  border-width: 0px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 7px;
  font-size: 25px;
`

export const ProfileImg = styled.img`
  height: 5vh;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  width: 90px;
  height: 30px;
  color: ${props => (props.theme === 'light' ? '#3b82f6' : '#ffffff')};
  cursor: pointer;
  font-weight: bold;
`

import styled from 'styled-components'

export const SidebarContainer = styled.nav`
  width: 17vw;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  height: 90vh;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`

export const OptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  padding: 0px;
`

export const OptionList = styled.li`
  color: ${props => (props.theme === 'light' ? '' : '#ffffff')};
`

export const Option = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
  font-size: 20px;
  width: 15vw;
  background-color: ${props => (props.isActive ? '#d7dfe9' : '')};
  color: ${props => (props.isActive ? '#ff0000' : '')};
`

export const OptionText = styled.p`
  margin-left: 20px;
  font-size: 15px;
  font-weight: bold;
  color: ${props => (props.isActive ? '#000000' : '#7e858e')};
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${props => (props.theme === 'light' ? '' : '#ffffff')};
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`

export const SocialMediaLogo = styled.img`
  height: 5vh;
  margin-right: 10px;
`

export const ContactUsDesc = styled.p`
  font-weight: bold;
  font-size: 15px;
`

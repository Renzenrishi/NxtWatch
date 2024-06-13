import styled from 'styled-components'

export const SidebarContainer = styled.div`
  width: 16vw;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 90vh;
  padding: 10px;
  background-color: ${props =>
    props.theme === 'light' ? '#ffffff' : '#181818'};
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
  color: ${props => (props.theme === 'light' ? '' : '#ffffff')};
`

export const OptionText = styled.p`
  margin-left: 20px;
  font-size: 15px;
  font-weight: bold;
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
  margin-top: 20px;
`

export const SocialMediaLogo = styled.img`
  height: 5vh;
  margin-right: 10px;
`

export const ContactUsDesc = styled.p`
  font-weight: bold;
  font-size: 15px;
`

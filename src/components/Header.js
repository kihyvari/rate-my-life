import React from 'react'
import styled, { withTheme } from 'styled-components'
import { MEDIA, Container } from './Framework'
import Categories from './Categories'
import ThemeToggler from './ThemeToggler'
import Tippy from './Tippy'
import logoLight from '../assets/pilviisi_logo.png'
import logoDark from '../assets/pilviisi_logo.png'
import QUESTIONS from '../data/questions'

const HeaderStyled = styled.header`
  text-align: center;
  /* background-image: url("../assets/pilviisi-banner.jpg"); */
`

const Heading = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

const Description = styled.div`
  text-align: center;

  p {
    margin-top: 10px;
  }
`

const Version = styled.a`
  text-align: center;
  color: ${props => props.theme.fadedColor};
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  left: 5%;
  top: -38px;
  text-decoration: none;

  ${MEDIA.md} {
    top: 10px;
  }
`

const ThemeTogglerWrapper = styled.div`
  position: absolute;
  top: -45px;
  right: 5%;
  text-align: center;

  ${MEDIA.md} {
    top: 0px;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  position: relative;
  height: 300px;
  max-width: 300px;
  margin: 60px auto -10px;


  ${MEDIA.md} {
    margin-top: 50px;
  }
`

const Logo = styled.img`
  /* position: absolute; */
  max-width: inherit;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`

function Header({ theme }) {
  return (
    <HeaderStyled>
      <Container>
        <LogoWrapper>
          {/* Toggling `src` is laggier than toggling the display style. */}
          <Logo
            src={logoLight}
            alt="Rate My Life"
            draggable="false"
            isVisible={theme.$type === 'light'}
          />
          <Logo
            src={logoDark}
            alt="Rate My Life"
            draggable="false"
            isVisible={theme.$type === 'dark'}
          />
        </LogoWrapper>
        <Description>
          <h2>Palveluihin ohjaava leikkimielinen psykologinen testi</h2>
          <p>KUKA ON PUIKOISSA? -HUPAINEN PERSOONALLISUUSTESTI
          Mikä on elämäsi tarkoitus, siinäpä vasta pulma.
          Oletko enemmän oman elämäsi kuski vai kyytiläinen? Ota siitä selvää.
          </p>
        </Description>
      </Container>
    </HeaderStyled>
  )
}

export default withTheme(Header)

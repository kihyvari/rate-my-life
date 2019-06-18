import React from 'react'
import styled, { withTheme } from 'styled-components'
import { MEDIA, Container } from './Framework'
import Categories from './Categories'
import ThemeToggler from './ThemeToggler'
import Tippy from './Tippy'
import logoLight from '../assets/tamora-logo.png'
import logoDark from '../assets/logo-dark.svg'
import QUESTIONS from '../data/questions'

const HeaderStyled = styled.header`
  text-align: center;
`

const Heading = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`

const Description = styled.div`
  text-align: left;

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
  position: relative;
  height: 230px;
  max-width: 300px;
  margin: 60px auto -10px;

  @media (min-width: 400px) {
    height: 150px;
  }

  ${MEDIA.md} {
    margin-top: 50px;
  }
`

const Logo = styled.img`
  position: absolute;
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
          <h2>Testaa, millainen kiirehtijä olet – jos olet lainkaan?</h2>
          <p>
            Paitsi itsemme ulkopuolelta aiheutamme kiireen kokemusta
            (= jännitteistä tilaa suhteessa aikaan) myös sisältämme tulevilla
            paineilla, uskomuksilla ja omilla toimintamalleillamme. Meillä
            kaikilla on intiimi suhde aikaan.
          </p>
          <p>
            Tilanteesta riippuen voit tunnistaa itsesi useammastakin
            kiirehtijätyylistä. Tunnistamalla kollegojesi tyylejä, alat
            ymmärtää paremmin yhteisösi aikaan liittyviä haasteita. Varmuudella
            voit muuttaa vain omaa käyttäytymistäsi.
          </p>
        </Description>
      </Container>
    </HeaderStyled>
  )
}

export default withTheme(Header)

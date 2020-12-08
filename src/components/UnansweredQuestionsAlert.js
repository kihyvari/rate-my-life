import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MEDIA, Button } from './Framework'
import Tippy from './Tippy'

const UnansweredQuestionsAlertStyled = styled.div`
  position: relative;
  padding: 20px;
  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 4px;
  margin-top: 10px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -20px;
    border-bottom: 20px solid;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  &::before {
    border-bottom-color: ${props => props.theme.borderColor};
    top: -20px;
  }

  &::after {
    border-bottom-color: ${props => props.theme.background};
    top: -19px;
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 11px;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;

  ${MEDIA.md} {
    flex-direction: row;
  }
`

const ButtonsItem = styled.div`
  flex: 1;
  margin: 10px 0;
`

const Text = styled.div`
  margin-bottom: 10px;
`

function UnansweredQuestionsAlert({
  turnOnHighlight,
  questionsRemaining,
  dispatch,
}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(true)
  const [trigger, setTrigger] = useState('manual')
  const isInitialTimeoutPending = useRef(false)

  useEffect(() => {
    if (
      turnOnHighlight &&
      isTooltipVisible &&
      !isInitialTimeoutPending.current
    ) {
      setTimeout(() => {
        setIsTooltipVisible(false)
        setTrigger('mouseenter focus')
      }, 5000)
      isInitialTimeoutPending.current = true
    }
  })

  const tooltipContent =
    'Vastaamattomat kysymykset ovat korostettu!'

  return (
    <UnansweredQuestionsAlertStyled>
      <Text>
        Vielä <strong>{questionsRemaining}</strong> kysymystä odottaa
        vastaustasi.
      </Text>
      <Buttons>
        <ButtonsItem>
          <Tippy
            a11y={false}
            content={tooltipContent}
            trigger={trigger}
            isVisible={turnOnHighlight && isTooltipVisible}
            theme="blue"
            distance={20}
            animateFill={false}
            inertia={true}
            hideOnClick={false}
            duration={[800, 400]}
          >
            <span>
              <Button
                aria-label={turnOnHighlight ? tooltipContent : undefined}
                onClick={() => dispatch({ type: 'TURN_ON_HIGHLIGHT' })}
                disabled={turnOnHighlight}
              >
                Korosta avoimena olevat kysymykset
              </Button>
            </span>
          </Tippy>
        </ButtonsItem>
        {/* <ButtonsItem>
          <Button onClick={() => dispatch({ type: 'MARK_UNANSWERED_NEUTRAL' })}>
            Vastaa neutraalisti avoimiin kysymyksiin
          </Button> // TODO we don't have neutral answers
        </ButtonsItem> */}
      </Buttons>
    </UnansweredQuestionsAlertStyled>
  )
}

export default UnansweredQuestionsAlert

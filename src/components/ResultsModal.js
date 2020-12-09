import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Transition } from 'react-spring'
import Modal from './Modal'
import RatingCircle from './RatingCircle'
import { getRatingColor } from '../utils/rating'
import CATEGORIES from '../data/categories'
import resultImage from "../assets/discount_poirot.jpg"
import './result.css' // TODO remove this hacky hack
import CallToActionButton from './CallToActionButton'

const goToLink = () => {
  window.open("https://www.pilviisi.fi");
}

const Categories = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  margin: 25px auto 0;
`

const Category = styled.div`
  margin: 10px 0;
`

const Title = styled.h2`
  color: ${props => props.theme.globalColor};
  margin-top: 2em;
  margin-bottom: 1.5em;
  text-align: center;
`

const CategoryTitle = styled.h4`
  text-align: center;
  margin: 0;
  font-weight: 500;
`

const CategoryImage = styled.img`
  position: relative;
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto -15px;
`

function ResultsModal({
  isVisible,
  rating,
  color,
  categoryRatings,
  dispatch,
  theme,
}) {
  return (
    <Transition
      native
      items={isVisible}
      from={{ transform: 'translate3d(0,40px,0)', opacity: 0 }}
      enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
      leave={{ transform: 'translate3d(0,40px,0)', opacity: 0 }}
      config={{
        duration: isVisible ? undefined : 125,
        tension: 150,
        friction: 10,
      }}
    >
      {item =>
        item
          ? props => (
              <Modal
                isVisible={isVisible}
                dispatch={dispatch}
                animation={props}
              >
                <Title>Lopputulemasi:</Title>
                <Categories>
                  {Object.keys(categoryRatings || {}).map(key => {
                    const rating = categoryRatings[key].rating
                    const color = getRatingColor(rating)
                    const name = key[0].toUpperCase() + key.slice(1)
                    return (
                      <Category key={key}>
                        <RatingCircle
                          rating={rating}
                          size={100}
                          color={color}
                          name={name}
                        >
                          <CategoryTitle>{name}</CategoryTitle>
                        </RatingCircle>
                      </Category>
                    )
                  })}
                </Categories>
                <div className='resultImgWrapper'>
                  <img className='resultImg' src={resultImage}/>
                  <p>Köysi kiristyy. Harmaat aivosolut raksuttavat, mutta kuka on Paroni Von Chlundenhauzenin myrkytyksen takana? Hovimestari? Ehkä? Entäpä  tuo epäilyttävän näköinen sisäkkö? Sinun on aika ennakoida, rakas Watson. </p>
                </div>
                <CallToActionButton onClick={goToLink}> 
            Tästä Sivuillemme!
          </CallToActionButton>
              </Modal>
            )
          : null
      }
    </Transition>
  )
}

export default withTheme(ResultsModal)

/* background-image: url("../assets/pilviisi-banner.jpg") */
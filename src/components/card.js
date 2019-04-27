import React, { useState } from 'react'
import Image from './image'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 35rem;
  max-height: 49rem;
`

const FrontTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.8rem;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 1.6;
  margin-top: 3rem;
  background: rgba(0, 0, 0, 0.6);
`

const BackWrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  border-radius: 5px;
  width: calc(100vw - 2rem);
  height: calc((100vw - 2rem) * 1.4);
  max-width: 35rem;
  max-height: 49rem;
`
const BackTitle = styled.div`
  border: 1px solid red;
  text-transform: capitalize;
  font-size: 2.4rem;
  color: white;
  display: flex;
  justify-content: left;
  max-height: 3em;
  text-align: left;
  line-height: 1.6;
`

const ImageWrapper = styled.div`
  /* padding: 100px 50px 0 50px; */
`

const Img = styled(Image)`
  max-width: 25rem;
  max-height: 25rem;
`

const Blurb = styled.div`
  margin-top: 25px;
  display: flex;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  max-height: 20vh;
  overflow-y: scroll;
  border: 1px solid orange;
`
const Careers = styled.ul`
  margin-top: 25px;
  font-size: 15px;
  background: white;
  color: black;
  display: flex;
`

const DataCornerLowLeft = styled.div`
  font-size: 15px;
  margin-left: 1px;
`

const DataCornerLowRight = styled.div`
  font-size: 15px;
  margin-right: 1px;
`

const Footer = styled.footer`
  background-color: black;
  align-items: flex-end;
`
const Front = ({ imagePath = '', en = {} }) => {
  const { title, variant } = en

  const path = require(`../${imagePath}`)

  return (
    <Wrapper style={{ background: variant }}>
      <ImageWrapper>
        <Img src={path} />
      </ImageWrapper>
      <FrontTitle>
        <div style={{ maxWidth: '50%' }}>{title}</div>
      </FrontTitle>
    </Wrapper>
  )
}

const Back = ({ en }) => {
  const { title, blurb_1, blurb_2, careers, variant } = en
  return (
    <BackWrapper style={{ background: variant }}>
      <BackTitle>{title}</BackTitle>

      <Blurb>{blurb_1}</Blurb>

      <Careers>
        {careers.map(career => (
          <li>{career}</li>
        ))}
      </Careers>

      <Blurb>{blurb_2}</Blurb>

      <Footer>
        <DataCornerLowLeft> mysparkpath.com </DataCornerLowLeft>
        <DataCornerLowRight> LOADLOGOHERE</DataCornerLowRight>
      </Footer>
    </BackWrapper>
  )
}

const Card = ({ image_path, en }) => {
  const [front, toggleView] = useState(false)

  if (front) {
    return <Front imagePath={image_path} en={en} />
  }

  return <Back en={en} />
}

export default Card

/*
const Title = styled.div`
  margin-top: 25px;
  text-align: left;
  font-size: 1.4rem;
`
*/

/*
const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  background: rgb(96, 183, 208);
  align: center;
  flex-direction: column;
`
*/

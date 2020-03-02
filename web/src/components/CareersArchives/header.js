import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'

import {getPublishdAt} from '../../lib/helpers'
import {colors} from '../../lib/variables'

const Wrapper = styled.header`
`

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.25;
  color: ${colors.lightBlack};
  margin: 0 0 8rem 0;
  max-width: 640px;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`

const StyledImg = styled(props => <Img {...props} />)`
  margin: 0 0 8rem 0;
  border-radius: 4px;
  max-height: 260px;
  @media (min-width: 768px) {
    max-height: 380px;
  }
`

const CareersHeader = props => {
  const {intro, mainImage} = props
  const {i18n} = useTranslation()

  return (
    <Wrapper>
      {intro && intro.locale &&
        <Title>{intro.locale}</Title>
      }
      {mainImage && mainImage.asset &&
        <StyledImg
          className='image'
          loading='eager'
          fluid={mainImage.asset.fluid}
        />
      }
    </Wrapper>
  )
}

export default CareersHeader
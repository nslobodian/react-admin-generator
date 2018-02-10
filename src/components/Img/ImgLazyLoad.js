import React from 'react'
import PropTypes from 'prop-types'
import LazyLoad from 'react-lazyload'
import Img from './Img'

const ImgLazyLoad = ({height = '100%', offset = 100, ...props}) =>
  <LazyLoad
    throttle={100}
    height={height}
    offset={offset}
    once
  >
    <Img {...props} />
  </LazyLoad>

ImgLazyLoad.propTypes = {
  props: PropTypes.object,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  offset: PropTypes.number,
}
export default ImgLazyLoad

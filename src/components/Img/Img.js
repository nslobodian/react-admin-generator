import React, {Component} from 'react'
import pure from 'recompose/pure'

const magic = {
  minWidth: '100%',
  minHeight: '100%',
}

const IMAGE = 'image'
const COLOR = 'color'

export class Img extends Component {
  componentWillMount () {
    /* eslint-disable no-console */
    if (!this.props.children && !this.props.alt) {
      __DEV__ && console.error(`Image ${this.props.src} require alt prop`)
    }
    /* eslint-enable no-console */

    this.unmouted = false

    this.state = {
      loaded: false,
      error: false,
    }
  }

  componentDidMount = () => {
    this.loadNewImage(this.props.src)
  }

  componentWillUnmount = () => {
    this.unmouted = true
  }

  componentWillReceiveProps = ({src}) => {
    if (src !== this.props.src) {
      this.setState({
        loaded: false,
        error: false,
      })
      this.loadNewImage(src)
    }
  }

  loadNewImage = src => {
    new Promise((resolve, reject) => {
      let image = new Image()
      image.src = src

      image.onload = resolve
      image.onerror = reject
    }).then(() => {
      !this.unmouted && this.setState({loaded: true})
    }).catch(() => {
      !this.unmouted && this.setState({error: true})
    })
  }

  getWrapperStyle = () => {
    const {placeholderType, placeholder, src} = this.props
    const {loaded} = this.state

    switch (placeholderType) {
      case IMAGE:
        return {backgroundImage: `url(${loaded && src ? src : placeholder})`}

      case COLOR:
        return loaded && src
          ? {backgroundImage: `url(${src})`}
          : {backgroundColor: `rgba(${placeholder})`}

      default:
        return {}
    }
  }

  render () {
    const {
      src,
      placeholder,
      children,
      imageProps,
      placeholderProps,
      placeholderType,
      className,
      loadingClassName,
      alt,
    } = this.props
    const {loaded, error} = this.state

    return children
      ? <div
        style={this.getWrapperStyle()}
        className={loaded ? className : loadingClassName || className}
      >
        {children}
      </div>
      : loaded && !error && src
        ? <img
          src={src}
          alt={alt}
          className={className}
          {...imageProps}
        />
        : <Placeholder
          placeholderType={placeholderType}
          placeholder={placeholder}
          placeholderProps={placeholderProps}
          className={className}
        />
  }
}

export const Placeholder = pure(({placeholderType, placeholder, placeholderProps, className}) => {
  switch (placeholderType) {
    case IMAGE:
      return (
        <img
          src={placeholder}
          className={className}
          {...placeholderProps}
        />
      )

    case COLOR:
      return (
        <div
          style={{backgroundColor: `rgba(${placeholder})`, ...magic}}
          className={className}
          {...placeholderProps}
        />
      )
    default:
      return null
  }
})

export default pure(Img)

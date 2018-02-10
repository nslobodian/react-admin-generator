import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Placeholder, Img } from '../Img'

describe('(Components) Placeholder', () => {
  it('Should render component properly with type image', () => {
    const placeholderType = 'image';
    const placeholder= 'placeholder';
    const placeholderProps = {};
    const className = 'placeholderClassName';
    const wrapper = shallow(
      <Placeholder
        placeholderType={placeholderType}
        placeholder={placeholder}
        placeholderProps={placeholderProps}
        className={className}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly with type color', () => {
    const placeholderType = 'color';
    const placeholder= 'placeholder';
    const placeholderProps = {};
    const className = 'placeholderClassName';
    const wrapper = shallow(
      <Placeholder
        placeholderType={placeholderType}
        placeholder={placeholder}
        placeholderProps={placeholderProps}
        className={className}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly with unmatching type', () => {
    const placeholderType = 'unmatchingType';
    const placeholder= 'placeholder';
    const placeholderProps = {};
    const className = 'placeholderClassName';
    const wrapper = shallow(
      <Placeholder
        placeholderType={placeholderType}
        placeholder={placeholder}
        placeholderProps={placeholderProps}
        className={className}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
  }),
  it('Should render component properly', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: true,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper.unmount()
  }),
  it('Should render component properly and will call didMount', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: true,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().componentDidMount()
  }),
  it('Should render component properly and will call componentWillReceiveProps', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const src = 'src';
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().componentWillReceiveProps({src})
  }),
  it('Should render component properly and will call componentWillReceiveProps with different src', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const src = 'differentSrc';
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().componentWillReceiveProps({src})
  }),
  it('Should render component properly and will call loadNewImage', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const src = 'differentSrc';
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().loadNewImage({src})
  }),
  it('Should render component properly and will call getWrapperStyle with placeholderType === color', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'color',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().getWrapperStyle()
  }),
  it('Should render component properly and will call getWrapperStyle with placeholderType === image', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'image',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().getWrapperStyle()
  }),
  it('Should render component properly and will call getWrapperStyle with unmatching placeholderType', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'unmatchingPlaceholderType',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().getWrapperStyle()
  }),
  it('Should render component properly and will call componentWillMount', () => {
    const props = {
      src: 'src',
      placeholder: 'placeholder',
      children: false,
      imageProps: {},
      placeholderProps: {},
      placeholderType: 'unmatchingPlaceholderType',
      className: 'placeholderClassName',
      loadingClassName: true,
      loaded: true,
      alt: 'alterName',
    };
    const wrapper = shallow(
      <Img
        {...props}
      />)
    wrapper.instance().componentWillMount()
  })
});

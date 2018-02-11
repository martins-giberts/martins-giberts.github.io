/* globals describe, it, expect */

import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Component from '../header/index'

configure({ adapter: new Adapter() });

describe('components/Header test', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Component/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
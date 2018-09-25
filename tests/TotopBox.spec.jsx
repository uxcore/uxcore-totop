/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import TotopBox from '../src/TotopBox';

Enzyme.configure({ adapter: new Adapter() });

describe('create TotopBox', () => {
  let wrapper;

  it('should be able to show view without any options', () => {
    wrapper = mount(
      <TotopBox />
    );
    expect(wrapper.find('.box-text')).to.have.length(1);
  });

  it('should render icon that with classname', () => {
    const Icon = <svg className="svg-icon" />;
    wrapper = mount(
      <TotopBox icon={Icon} />
    );
    expect(wrapper.find('.box-icon.svg-icon').length).to.be(1);
  });

  it('should render label', () => {
    const label = 'label';
    wrapper = mount(
      <TotopBox label={label} />
    );
    expect(wrapper.find('.box-text').text()).to.be(label);
  });

  it('simulate click events', () => {
    const clickHandler = sinon.spy();
    wrapper = mount(
      <TotopBox onClick={clickHandler} />
    );
    wrapper.find('.box').simulate('click');
    expect(clickHandler.calledOnce).to.equal(true);
  });
});

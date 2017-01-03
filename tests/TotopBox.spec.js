import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import TotopBox from '../src/TotopBox';

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
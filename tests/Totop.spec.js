import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import $ from 'jquery';
import Totop from '../src';

sinon.spy(Totop.prototype, 'handleGotopClick');

const getWrapperElement = () => {
    var div = document.createElement('div');
    document.body.appendChild(div);
    return div;
};

function createTotopAndScroll(to, duration, callback) {
    let totop;
    ReactDOM.render(
        <div style={{height: 3000}}>
            <Totop ref={(c) => {totop = c}}/>
        </div>,
        getWrapperElement()
    );
    let el = document.body;
    el.scrollTop = 2000;
    totop.scrollTo(el, to, duration, () => {
        callback && callback(el, totop);
    });
}

describe('create Totop', () => {
    let wrapper;

    it('should render gotop button', () => {
        wrapper = mount(
            <Totop />
        );
        expect(wrapper.find('.gotop-box')).to.have.length(1);
    });

    it('should trigger Totop click event', () => {
        const wrapper = mount(
            <Totop />
        );
        wrapper.find('.gotop-box .btn').simulate('click');
        expect(Totop.prototype.handleGotopClick.calledOnce).to.be(true);
    });

    it('should scroll to correct position', (done) => {
        createTotopAndScroll(10, 200, () => {
            expect(document.body.scrollTop).to.be(10);
            done();
        });
    });

    it('should show Totop when body scrollTop larger than distance', (done) => {
        const distance = 100;
        createTotopAndScroll(200, 200, (el, instance) => {
            expect(el.scrollTop > distance).to.be(true);
            done();
        });
    });

    /*it('should get correct scrollTop when timer', () => {
        wrapper = mount(
            <Totop distance={100} />
        );
        const instance = wrapper.instance();
        document.body.scrollTop = 1000;
        setTimeout(() => {

        }, 10);
    });*/

    it('should remove scroll.totop event when componentWillUnmount', () => {
        wrapper = mount(
            <Totop distance={100} />
        );

        const instance = wrapper.instance();
        sinon.spy(Totop.prototype, 'componentWillUnmount');
        wrapper.unmount();
        expect(Totop.prototype.componentWillUnmount.calledOnce).to.be(true);
    });
});
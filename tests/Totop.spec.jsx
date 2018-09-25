/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Totop from '../src';
import util from '../src/util';

Enzyme.configure({ adapter: new Adapter() });

sinon.spy(Totop.prototype, 'handleGotopClick');

const getWrapperElement = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
};

function createTotopAndScroll(to, duration, callback) {
  let totop;
  ReactDOM.render(
    <div style={{ height: '3000px' }}>
      <Totop ref={(c) => { totop = c; }} />
    </div>,
    getWrapperElement(),
  );
  util.setWindowScrollY(2000);
  totop.scrollTo(to, duration, () => {
    if (callback) {
      callback(totop);
    }
  });
}

describe('create Totop', () => {
  let wrapper;

  it('should render gotop button', () => {
    wrapper = mount(
      <Totop />,
    );
    const popup = mount(wrapper.instance().getComponent());
    expect(popup.find('.gotop-box')).to.have.length(1);
  });

  it('should trigger Totop click event', () => {
    wrapper = mount(
      <Totop />,
    );
    const popup = mount(wrapper.instance().getComponent());
    popup.find('.gotop-box .btn').simulate('click');
    expect(Totop.prototype.handleGotopClick.calledOnce).to.be(true);
  });

  it('should scroll to correct position', (done) => {
    createTotopAndScroll(10, 1000, () => {
      expect(util.getWindowScrollY()).to.be(10);
      done();
    });
  });

  it('should show Totop when body scrollTop larger than distance', (done) => {
    const distance = 100;
    createTotopAndScroll(200, 200, () => {
      expect(util.getWindowScrollY() > distance).to.be(true);
      done();
    });
  });

  /* it('should get correct scrollTop when timer', () => {
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
      <Totop distance={100} />,
    );

    sinon.spy(Totop.prototype, 'componentWillUnmount');
    wrapper.unmount();
    expect(Totop.prototype.componentWillUnmount.calledOnce).to.be(true);
  });
});

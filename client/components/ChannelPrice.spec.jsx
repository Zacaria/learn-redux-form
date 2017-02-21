import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
// import spies from 'chai-spies';

import Panel from 'react-ui-components/layout/Panel';
import ChannelPrice from './ChannelPrice';

const expect = chai.expect;
// chai.use(spies);

describe('<ChannelPrice />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<ChannelPrice />);
    expect(wrapper.find(Panel)).to.have.length(1);
  });
});

import React from 'react';
import { Field } from 'redux-form';
import Panel from 'react-ui-components/layout/Panel';
import Checkbox from './Checkbox';

const ChannelPrice = () => (
  <Panel>
    Channel <br/>
    Turns the form as invalid : <Field name="channel.shouldFail" component={Checkbox} />
  </Panel>
);

export default ChannelPrice;

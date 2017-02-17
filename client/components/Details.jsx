import React from 'react';
import { Field } from 'redux-form';
import Panel from 'react-ui-components/layout/Panel';

const Details = () => (
  <Panel>
    <h1>Offer Details</h1>
    <Field component="select" name="details.condition">
      <option>New</option>
      <option>OverUsed</option>
      <option>Crushed</option>
    </Field>
    <Field component="input" type="number" name="details.quantity" normalize={value => value >= 0 ? value : 0} />
    <Field component="textarea" type="text" name="details.description" />
  </Panel>
);

export default Details;

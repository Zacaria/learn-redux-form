import get from 'lodash.get';
import React from 'react';
import { Field } from 'redux-form';
import Panel from 'react-ui-components/layout/Panel';

const Details = ({errors}) => (
  <Panel>
    <h1>Offer Details</h1>
    <Field component="select" name="details.condition">
      <option>New</option>
      <option>OverUsed</option>
      <option>Crushed</option>
    </Field>
    {get(errors, 'condition') && <span>{get(errors, 'condition')}</span>}
    <Field component="input" type="number" name="details.quantity"
           normalize={value => value >= 0 ? Number(value) : 0}
           format={Number}/>
    {get(errors, 'quantity') && <span>{get(errors, 'quantity')}</span>}
    <Field component="textarea" type="text" name="details.description" />
    {get(errors, 'description') && <span>{get(errors, 'description')}</span>}
  </Panel>
);

export default Details;

import get from 'lodash.get';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, getFormValues, getFormAsyncErrors, reset, Field } from 'redux-form';
import Form from 'react-ui-components/forms/Form';
import Panel from 'react-ui-components/layout/Panel';
import Button from 'react-ui-components/buttons/Button';

import { getOffer } from '../redux/modules';
import { submit, validate } from '../redux/modules/offer';

import Details from '../components/Details';
import ChannelPrice from '../components/ChannelPrice';

export const FORM_NAME = 'offerEdit';

class OfferForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // try {
    const {sendForm, currentValue} = this.props;
    sendForm(currentValue);
    this.props.resetForm(FORM_NAME);
    // } catch (err) {
    //   console.log('caught', err);
    // }

    // const {sendForm, currentValue} = this.props;
    // sendForm(currentValue);
  }

  renderDescription() {
    return (
      <Panel>
        Description content
      </Panel>
    );
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        id: {this.props.initialValues.id}
        {this.renderDescription()}
        <Details errors={get(this.props, 'errors.details')} />
        <ChannelPrice />
        <Button type="submit" bsStyle="primary" disabled={!!(this.props.pristine || this.props.submitting || this.props.asyncValidating)}>Submit</Button>
      </Form>
    );
  }
}

OfferForm.propTypes = {
  sendForm: PropTypes.func,
  initialValues: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  currentValue: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.shape({
      condition: PropTypes.string,
      quantity: PropTypes.number,
      description: PropTypes.string
    })
  }).isRequired
};

OfferForm = reduxForm({
  form: FORM_NAME,
  asyncValidate: validate
})(OfferForm);

const mapStateToProps = state => ({
  initialValues: Object.assign({}, getOffer(state)),
  currentValue: getFormValues(FORM_NAME)(state) || {},
  errors: getFormAsyncErrors(FORM_NAME)(state)
});

const mapDispatchToProps = dispatch => ({
  sendForm: bindActionCreators(submit, dispatch),
  resetForm: bindActionCreators(reset, dispatch)
});

OfferForm = connect(mapStateToProps, mapDispatchToProps)(OfferForm);

export default OfferForm;

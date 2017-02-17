import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import Form from 'react-ui-components/forms/Form';
import Panel from 'react-ui-components/layout/Panel';
import Button from 'react-ui-components/buttons/Button';

import { getOffer } from '../redux/modules';
import { submit } from '../redux/modules/offer';

import Details from '../components/Details';

export const FORM_NAME = 'offerEdit';

class OfferForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {submit, currentValue} = this.props;
    submit(currentValue);
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
        <Details />
        <Button type="submit" bsStyle="primary">Submit</Button>
      </Form>
    );
  }
}

OfferForm.propTypes = {
  submit: PropTypes.func,
  initialValues: PropTypes.shape({
    id: PropTypes.string
  }).isRequired,
  currentValue: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    details: PropTypes.shape({
      condition: PropTypes.string,
      quantity: PropTypes.string,
      description: PropTypes.string
    })
  }).isRequired
};

OfferForm = reduxForm({
  form: FORM_NAME
})(OfferForm);

const mapStateToProps = state => ({
  initialValues: getOffer(state),
  currentValue: getFormValues(FORM_NAME)(state)
});

const mapDispatchToProps = dispatch => ({
  submit: bindActionCreators(submit, dispatch)
});

OfferForm = connect(mapStateToProps, mapDispatchToProps)(OfferForm);

export default OfferForm;

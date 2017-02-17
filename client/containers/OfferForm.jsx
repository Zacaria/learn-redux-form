import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Form from 'react-ui-components//forms/Form';
import Panel from 'react-ui-components/layout/Panel';
// import Button from 'react-ui-components/buttons/Button';

import { getOffer } from '../redux/modules';
import { edit } from '../redux/modules/offer';

class OfferForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Submit !');
    this.props.edit();
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
        {this.renderDescription()}
        id: {this.props.offer.id}
        <br/>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

OfferForm = reduxForm({
  form: 'offerEdit'
})(OfferForm);

const mapStateToProps = state => ({
  offer: getOffer(state)
});

const mapDispatchToProps = dispatch => ({
  edit: bindActionCreators(edit, dispatch)
});

OfferForm = connect(mapStateToProps, mapDispatchToProps)(OfferForm);

export default OfferForm;

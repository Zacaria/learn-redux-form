//
// import React, { PureComponent } from 'react';
// import Button from 'react-ui-components/buttons/Button';
// import ButtonToolbar from 'react-ui-components/buttons/ButtonToolbar';
// import Panel from 'react-ui-components/layout/Panel';
// import Row from 'react-ui-components/layout/Row';
// import Col from 'react-ui-components/layout/Col';
//
// /*
//  * Component helping to create a "standard" form : aim to ease maintaining consistency between forms and to reduce
//  * duplication.
//  */
// export default class Form extends PureComponent {
//
//   render() {
//         // user provided
//     const { onSubmit, onCancel, formId, children, additionalButtons } = this.props;
//
//         // redux form provided
//     const { handleSubmit } = this.props;
//
//     const header = ('header');
//
//     const footer = (
//       <Row>
//         <Col xs={6}>
//           {additionalButtons}
//         </Col>
//         <Col xs={6}>
//           <ButtonToolbar className="pull-right">
//             <Button bsStyle="success" type="submit" onClick={handleSubmit(onSubmit)}>
//               {'submitId'}
//             </Button>
//             <Button onClick={onCancel}>{'cancelId'}</Button>
//           </ButtonToolbar>
//         </Col>
//       </Row>
//         );
//
//     return (
//       <form id={formId}>
//         <Panel header={header} footer={footer}>
//           {children}
//         </Panel>
//       </form>
//     );
//   }
// }
//
// // Form.propTypes = {
// //   titleId: React.PropTypes.string.isRequired,  // i18n key for title
// //   submitId: React.PropTypes.string.isRequired, // i18n key for submit button
// //   cancelId: React.PropTypes.string,            // i18n key for cancel button (defaults to 'button.cancel')
// //   onSubmit: React.PropTypes.func.isRequired,   // callback invoked on submit
// //   onCancel: React.PropTypes.func.isRequired,   // callback invoked on cancel
// //   formId: React.PropTypes.string.isRequired,   // id of the form (as provided to reduxForm)
// //   children: React.PropTypes.node.isRequired,   // want goes inside the form :D
// //   additionalButtons: React.PropTypes.node, // buttons to add on bottom left of the form (defaults to none)
// //   handleSubmit: React.PropTypes.func.isRequired,         // handleSubmit as provider by reduxForm
// //   error: React.PropTypes.shape({ // provided by redux-form
// //     key: React.PropTypes.string,
// //   }),
// // };

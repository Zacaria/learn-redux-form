import ReactDOM from 'react-dom';
import React from 'react';

const Lo = () => (<div> ed</div>);
const Co = () => (<div> Hey <Lo /></div>);

ReactDOM.render(<Co />, document.getElementById('main'));

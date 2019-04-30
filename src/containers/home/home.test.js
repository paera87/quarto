import React from 'react';
import ReactDom from 'react-dom';
import {Home} from './index';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<Home/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
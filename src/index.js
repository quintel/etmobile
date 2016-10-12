import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './containers/Root';
import * as api from './utils/api';

import './index.css';

render(<Root api={api} />, document.getElementById('root'));

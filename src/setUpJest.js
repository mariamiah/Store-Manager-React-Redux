
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() });
global.fetch = require('jest-fetch-mock');
global.crypto = require('crypto');

global.crypto.subtle = {};

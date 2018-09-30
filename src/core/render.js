import { toUpperFirst } from '../utils';

const toUpperTag = (strings, ...values) => strings.map((value, i) => value + toUpperFirst(values[i] || '')).join('');
const renderUser = ({ name, surname }) => toUpperTag`<li>${name} ${surname}</li>`;
const renderUserList = (users) => `<ul>${users.map(renderUser).join('')}</ul>`;

export const render = (state) => renderUserList(state.getUsers());

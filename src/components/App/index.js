import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Global} from '@emotion/react';

import {Header} from '../Header';
import {Cards} from '../Cards';
import {Chat} from '../Chat';
import {Chats} from '../Chats';

import {GlobalStyles} from './styled';

/** Application top component */
export const App = () => (
	<Router>
		<Global styles={GlobalStyles} />
		<Routes>
			<Route path='/' element={<>
				<Header />
				<Cards />
			</>} />
			<Route path='/chats/:person' element={<>
				<Header backButton='/chats' />
				<Chat />
			</>} />
			<Route path='/chats' element={<>
				<Header backButton='/' />
				<Chats />
			</>} />
		</Routes>
	</Router>
);

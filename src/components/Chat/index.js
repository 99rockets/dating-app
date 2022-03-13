import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';

import {
	StyledChat,
	StyledTimestamp,
	StyledMessage,
	StyledText,
	StyledInputForm,
	StyledInputField,
	StyledInputButton
} from './styled';

/** Chat screen */
export const Chat = () => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
		{
			name: 'Name',
			image: '',
			message: 'Hello!'
		},
		{
			message: 'Hi!'
		}
	]);

	const onChangeInput = (e) => setInput(e.target.value);

	const onSend = (e) => {
		e.preventDefault();
		setMessages([...messages, {message: input}]);
		setInput('');
	};

	return (
		<StyledChat>
			<StyledTimestamp>You matched with Name on 10/08/22</StyledTimestamp>
			{messages.map(({name, message, image}, index) => (
				<StyledMessage key={`${name}-${index}`}>
					{name && <Avatar
						alt={name}
						src={image}
					/>}
					<StyledText hasName={name}>{message}</StyledText>
				</StyledMessage>
			))}
			<StyledInputForm>
				<StyledInputField
					type='text'
					placeholder='Type a message...'
					value={input}
					onChange={onChangeInput}
				/>
				<StyledInputButton
					type='submit'
					onClick={onSend}
				>
					Send
				</StyledInputButton>
			</StyledInputForm>
		</StyledChat>
	);
};

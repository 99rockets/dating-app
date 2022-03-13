import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {
	StyledChats,
	StyledChat,
	StyledAvatar,
	StyledDetails,
	StyledTimestamp
} from './styled';

/** Chats screen */
export const Chats = () => {
	const [chats] = useState([
		{
			name: 'Person Name',
			message: "What's up?",
			timestamp: '40 sec ago',
			profilePic: ''
		},
		{
			name: 'Person Name',
			message: "What's up?",
			timestamp: '40 sec ago',
			profilePic: ''
		}
	]);

	return (
		<StyledChats>
			{chats.map(({name, message, timestamp, profilePic}, index) => (
				<Link
					to={`/chats/${name}`}
					key={`${name}-${index}`}
				>
					<StyledChat>
						<StyledAvatar alt={name} src={profilePic} />
						<StyledDetails>
							<h2>{name}</h2>
							<p>{message}</p>
						</StyledDetails>
						<StyledTimestamp>{timestamp}</StyledTimestamp>
					</StyledChat>
				</Link>
			))}
		</StyledChats>
	);
};

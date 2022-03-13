import React, {useState} from 'react';

import {Controls} from '../Controls';

import {
	StyledCards,
	StyledCard,
	StyledImage,
	StyledTitle
} from './styled';

/** Cards view */
export const Cards = () => {
	const [people] = useState([
		{
			name: 'First Person',
			url: 'https://i.stack.imgur.com/l60Hf.png'
		},
		{
			name: 'Second Person',
			url: 'https://i.stack.imgur.com/l60Hf.png'
		}
	]);

	return (
		<StyledCards>
			{people.map(({name, url}, index) => (
				<StyledCard
					key={`${name}-${index}`}
					preventSwipe={['up', 'down']}
				>
					<StyledImage imageUrl={url}>
						<StyledTitle>{name}</StyledTitle>
					</StyledImage>
				</StyledCard>
			))}
			<Controls />
		</StyledCards>
	);
};

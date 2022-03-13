import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

import {
	StyledHeader,
	StyledIconButton,
	StyledFaceIcon
} from './styled';

/** Application header */
export const Header = ({backButton}) => {
	const navigate = useNavigate();

	return (
		<StyledHeader>
			{backButton
				? <StyledIconButton onClick={() => navigate(backButton)}>
					<ArrowBackIosIcon fontSize='large' />
				</StyledIconButton>
				: <StyledIconButton>
					<PersonIcon fontSize='large' />
				</StyledIconButton>
			}
			<Link to='/'>
				<StyledFaceIcon fontSize='large' />
			</Link>
			<Link to='/chats'>
				<StyledIconButton>
					<MessageIcon fontSize='large' />
				</StyledIconButton>
			</Link>
		</StyledHeader>
	);
};

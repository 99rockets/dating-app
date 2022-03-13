import styled from '@emotion/styled';
import SwipeableCard from 'react-tinder-card';

export const StyledCards = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 5vh;
`;

export const StyledCard = styled(SwipeableCard)`
	position: absolute;
`;

export const StyledImage = styled.div`
	position: relative;
	width: 600px;
	max-width: 85vw;
	height: 55vh;
	padding: 20px;
	border-radius: 20px;
	background-size: cover;
	background-position: center;
	background-image: ${({imageUrl}) => `url(${imageUrl})`};
	box-shadow: 0 18px 52px 0 rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
`;

export const StyledTitle = styled.h2`
	position: absolute;
	bottom: 12px;
	color: white;
`;

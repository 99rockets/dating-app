import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';

export const StyledChats = styled.div`
	display: flex;
	flex-direction: column;

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export const StyledChat = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	padding: 20px;
	border-bottom: 1px solid #fafafa;
`;

export const StyledAvatar = styled(Avatar)`
	margin-right: 20px;
`;

export const StyledDetails = styled.div`
	flex: 1;

	p {
		color: gray;
	}
`;

export const StyledTimestamp = styled.p`
	color: lightgray;
`;

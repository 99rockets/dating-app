import styled from '@emotion/styled';

export const StyledChat = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledTimestamp = styled.p`
	padding: 20px;
	color: gray;
	text-align: center;
	text-transform: uppercase;
`;

export const StyledMessage = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
`;

export const StyledText = styled.p`
	padding: 15px;
	margin-left: auto;
	color: white;
	background: #29b3cd;
	border-radius: 20px;

	${({hasName}) => hasName && `
		margin-left: 10px;
		color: black;
		background: lightgray;
	`};
`;

export const StyledInputForm = styled.form`
	display: flex;
	position: fixed;
	width: 100%;
	padding: 5px;
	bottom: 0;
	border-top: 1px solid lightgray;
`;

export const StyledInputField = styled.input`
	flex: 1;
	padding: 10px;
	border: none;
	outline: none;
`;

export const StyledInputButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	font-weight: bolder;
	background-color: white;
	color: #fe3d71;
	text-transform: uppercase;
	border: none;
`;

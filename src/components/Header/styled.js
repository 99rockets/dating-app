import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

import FaceIcon from '@mui/icons-material/Face';

export const StyledHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	border-bottom: 1px solid #f9f9f9;
`;

export const StyledIconButton = styled(IconButton)`
	padding: 20px;
	box-sizing: border-box;
`;

export const StyledFaceIcon = styled(FaceIcon)`
	width: 50px;
	height: 50px;
	color: #fd297a;
	object-fit: contain;
`;

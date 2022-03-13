import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export const StyledControls = styled.div`
	display: flex;
	position: fixed;
	width: 100%;
	max-width: 85vw;
	bottom: 10vh;
	justify-content: space-evenly;
`;

export const StyledIconButton = styled(IconButton)`
	display: flex;
	padding: 3vw;
	background-color: white;
	box-shadow: 0 10px 52px 0 rgba(0, 0, 0, 0.3);
`;

export const StyledReplayIcon = styled(ReplayIcon)`
	color: #f5b748;
`;

export const StyledCloseIcon = styled(CloseIcon)`
	color: #ec5e6f;
`;

export const StyledStarRateIcon = styled(StarRateIcon)`
	color: #62b4f9;
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
	color: #76e2b3;
`;

export const StyledFlashOnIcon = styled(FlashOnIcon)`
	color: #915dd1;
`;

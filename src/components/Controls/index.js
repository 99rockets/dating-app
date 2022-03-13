import React from 'react';

import {
	StyledControls,
	StyledIconButton,
	StyledReplayIcon,
	StyledCloseIcon,
	StyledStarRateIcon,
	StyledFavoriteIcon,
	StyledFlashOnIcon
} from './styled';

/** Application controls */
export const Controls = () => (
	<StyledControls>
		<StyledIconButton>
			<StyledReplayIcon fontSize='large' />
		</StyledIconButton>
		<StyledIconButton>
			<StyledCloseIcon fontSize='large' />
		</StyledIconButton>
		<StyledIconButton>
			<StyledStarRateIcon fontSize='large' />
		</StyledIconButton>
		<StyledIconButton>
			<StyledFavoriteIcon fontSize='large' />
		</StyledIconButton>
		<StyledIconButton>
			<StyledFlashOnIcon fontSize='large' />
		</StyledIconButton>
	</StyledControls>
);

/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react';
import Banner1 from '../assets/images/banner-1.svg';

const style = css`
	width: 100%;
	background: black;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	.slide {
	}
`;

const Carousel: React.FC = () => (
	<div css={style}>
		<div className="slide">
			<img src={Banner1} alt="main banner" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
			</p>
		</div>
	</div>
);

export default Carousel;

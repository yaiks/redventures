/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cucumber } from "styles/colors";
import mq from "styles/breakpoints";
import { space } from "styles/space";

import { ReactComponent as Logo } from "assets/logo-greenthumb.svg";

const SidebarLogo = () => (
	<div
		css={css`
			display: none;
			position: absolute;
			top: ${space[9]}px;
			left: 0;
			transform: rotate(270deg);
			${mq[1]} {
				display: block;
			}
		`}
	>
		<p
			css={css`
				line-height: 0.5;
				text-align: center;
			`}
		>
			<span
				css={css`
					display: inline-block;
					position: relative;
					::before {
						content: "";
						position: absolute;
						height: ${space[1]}px;
						border-bottom: 1px solid ${cucumber};
						top: ${space[2]}px;
						width: 500px;
						right: 100%;
						margin-right: ${space[6]}px;
					}
				`}
			>
				<Logo width='200px' />
			</span>
		</p>
	</div>
);

export default SidebarLogo;

import { cn } from "@/lib/utils";
import React from "react";

type LogoVariant = "default" | "small" | "small-outline";
type LogoColor = "background" | "foreground";

interface LogoProps {
	color: LogoColor;
	variant?: LogoVariant;
	className?: string;
	pathClassName?: string;
}

const Logo = ({
	variant = "default",
	color,
	className,
	pathClassName,
}: LogoProps) => {
	const fill = cn(`fill-${color}`, pathClassName);

	if (variant === "small-outline") {
		return (
			<svg
				{...{ className }}
				viewBox="0 0 382 399"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={fill}
					d="M153.484 398.59C95.6018 398.59 53.8306 378.235 25.7844 336.362C7.95367 309.825 0 282.602 0 248.102C0 187.58 24.9984 122.153 65.2389 77.3513C86.2383 53.5375 113.246 33.9274 143.298 20.6878C173.622 7.4105 206.352 0.540485 239.445 0.506836C271.341 0.506836 303.623 8.36894 328.011 22.0766C353.598 36.4581 368.272 56.0528 368.272 75.8357C368.272 102.156 342.914 127.041 316.093 127.041C301.633 127.041 296.863 124.167 266.106 101.598C256.674 94.6251 236.55 89.1737 220.274 89.1737C190.065 89.1737 159.115 107.578 135.361 139.669C115.672 166.316 104.377 202.038 104.377 237.673C104.377 284.94 127.414 309.923 170.997 309.923C209.141 309.923 236.333 290.101 255.967 247.727H225.759C207.192 247.727 201.479 247.156 192.292 241.907L191.985 241.72C182.307 235.485 176.295 223.425 176.295 210.247C176.295 195.307 184.438 179.802 197.549 169.777C207.622 161.914 216.539 159.517 235.672 159.517C238.05 159.517 240.65 159.552 243.618 159.624C339.287 160.178 340.934 160.388 341.473 160.456C358.107 162.594 373.347 174.484 378.572 189.388C382.809 200.691 382.64 206.529 380.09 226.445L368.272 318.663C366.317 333.883 365.22 338.624 359.747 346.401C353.546 355.614 341.824 361.561 329.857 361.561C328.324 361.561 326.793 361.463 325.272 361.267C311.556 359.5 299.505 350.191 295.266 338.091C295.115 337.684 294.969 337.284 294.829 336.893C288.234 347.335 279.868 356.541 270.109 364.095L269.685 364.401C253.082 375.442 234.933 383.947 215.832 389.637L214.874 389.922C214.376 390.069 213.913 390.195 213.521 390.299C193.992 395.852 173.784 398.643 153.484 398.59V398.59ZM239.445 14.0331C208.222 14.0643 177.342 20.5455 148.731 33.0721C120.457 45.5264 95.0694 63.9518 75.3141 86.3581C37.1695 128.822 13.4992 190.782 13.4992 248.102C13.4992 279.746 20.7429 304.64 36.9868 328.816C49.8168 347.971 65.4177 361.811 84.6872 371.136C104.054 380.508 126.557 385.064 153.484 385.064C172.549 385.115 191.528 382.493 209.869 377.273L210.013 377.233C210.682 377.057 211.156 376.92 211.577 376.782C211.827 376.694 212.082 376.621 212.341 376.563C229.94 371.282 246.669 363.438 261.991 353.282C278.252 340.665 289.821 322.948 294.847 302.965L295.244 301.39L308.328 304.72L308.086 305.676L307.422 310.823C305.52 325.559 305.734 327.568 307.926 333.4L307.982 333.561C310.515 340.858 318.334 346.734 326.995 347.85C327.943 347.972 328.897 348.033 329.852 348.032C337.358 348.032 344.884 344.32 348.578 338.795L348.672 338.658C352.381 333.398 353.077 330.962 354.878 316.934L366.699 224.718C369.144 205.62 369.062 202.47 365.908 194.078L365.852 193.92C362.352 183.854 351.493 175.466 339.976 173.898C335.55 173.727 280.135 173.358 243.475 173.145H243.349C240.465 173.075 237.953 173.041 235.668 173.041C218.39 173.041 212.825 174.987 205.815 180.467L205.758 180.513C196.061 187.919 189.796 199.59 189.796 210.245C189.796 218.668 193.461 226.497 199.148 230.249C204.953 233.547 207.809 234.199 225.76 234.199H276.316L272.514 243.52C250.583 297.303 217.377 323.448 170.997 323.448C120.08 323.448 90.8775 292.184 90.8775 237.672C90.8775 199.201 103.137 160.544 124.515 131.611C150.846 96.0451 185.747 75.6452 220.274 75.6452C239.666 75.6452 262.304 81.9758 274.101 90.6978C305.195 113.513 306.646 113.513 316.093 113.513C335.252 113.513 354.773 94.4972 354.773 75.834C354.773 61.0851 342.611 45.7908 321.407 33.8723C298.974 21.2651 269.1 14.0331 239.445 14.0331Z"
				/>
			</svg>
		);
	}

	if (variant === "small") {
		return (
			<svg
				{...{ className }}
				viewBox="0 0 382 399"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					className={fill}
					d="M378.834 191.239C376.139 184.467 371.678 178.541 365.916 174.078C360.154 169.615 353.301 166.777 346.07 165.861C344.235 165.626 245.424 165.077 245.424 165.077C220.76 164.473 212.243 166.175 202.049 174.127C196.339 178.364 191.646 183.821 188.313 190.101C184.98 196.381 183.09 203.325 182.78 210.428C182.6 215.602 183.696 220.741 185.972 225.391C188.248 230.041 191.633 234.06 195.83 237.092C203.774 241.625 208.314 242.197 227.049 242.197H269.044C247.478 294.99 215.717 320.524 170.304 320.524C121.494 320.524 94.2347 291.563 94.2347 238.793C94.1059 200.979 105.818 164.074 127.729 133.254C153.827 98.0661 187.886 78.1941 221.356 78.1941C239.539 78.1129 257.394 83.0371 272.965 92.4276C304.742 115.695 308.153 117.397 320.638 117.397C332.743 116.806 344.212 111.803 352.881 103.334C361.55 94.8643 366.818 83.5142 367.691 71.4263C367.691 33.9722 308.09 0.501898 241.165 0.501898C208.166 0.312853 175.498 7.08577 145.294 20.3785C115.09 33.6711 88.0286 53.1847 65.8775 77.6451C24.2554 125.347 0.929223 186.282 0.0583522 249.584C-0.814268 280.673 8.11905 311.248 25.5924 336.977C53.385 378.399 94.815 398.271 152.141 398.271C172.56 398.33 192.885 395.527 212.526 389.943C213.247 389.755 213.953 389.559 214.659 389.324C214.698 389.315 214.738 389.315 214.776 389.324C233.911 383.637 252.092 375.135 268.723 364.095C286.97 350.031 299.935 330.219 305.518 307.867V307.867L304.773 313.608C302.773 329.049 302.758 332.546 305.683 340.326C307.791 345.5 311.235 350.022 315.663 353.429C320.091 356.837 325.344 359.008 330.886 359.721C336.428 360.434 342.059 359.663 347.205 357.487C352.352 355.312 356.828 351.809 360.178 347.337C364.985 340.538 365.903 336.742 367.832 321.724L380.073 226.293C382.669 206.037 382.708 201.457 378.866 191.247"
				/>
			</svg>
		);
	}

	return (
		<svg
			{...{ className }}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 522.01 67.24"
		>
			<g id="Laag_2" data-name="Laag 2">
				<g id="Laag_1-2" data-name="Laag 1">
					<g id="Group_2" data-name="Group 2">
						<path
							id="Path_229"
							data-name="Path 229"
							className={fill}
							d="M92.76,19.43A28,28,0,0,0,73,27.93c-5.1,5.37-8.6,13.88-8.6,21a18.4,18.4,0,0,0,5,12.26c3.49,3.59,8.33,5.37,14.68,5.37,6.18,0,12.9-1.78,17.37-4.74,3-2,4.57-4,4.57-6.36,0-2.68-1.79-4.65-4.21-4.65a8.82,8.82,0,0,0-3,.62c-7.61,3.4-8.42,3.67-11.73,3.67-5.2,0-8-2.5-8.69-7.78h24.54c5.28,0,7.25-2.78,7.25-9.94C110.13,27,102.88,19.43,92.76,19.43Zm-13,19c3.13-5.55,6.72-8.24,10.92-8.24a6.71,6.71,0,0,1,5.37,2.33c1,1.25,1.35,2.77,1.44,5.91Z"
						/>
						<path
							id="Path_230"
							data-name="Path 230"
							className={fill}
							d="M148.24,25.16c0-3.49-2-4.84-6.8-4.84H139l1.43-6.8A11.46,11.46,0,0,0,141,10a5,5,0,0,0-4.76-5.19h-.43a8.43,8.43,0,0,0-6.45,3.22c-1,1.43-1.34,2.24-2,5.46l-1.52,6.8c-3.13,0-3.85.09-5.37.81a7.25,7.25,0,0,0-4.12,6.27c0,3.49,2.06,4.92,7,4.83L118,57.57a11.46,11.46,0,0,0-.54,3.49,5,5,0,0,0,4.72,5.28h.48a8.27,8.27,0,0,0,6.44-3.22c1.08-1.43,1.34-2.33,2.06-5.55l5.37-25.34h2.42c3.49,0,4.83-.27,6.36-1.43A7.4,7.4,0,0,0,148.24,25.16Z"
						/>
						<path
							id="Path_231"
							data-name="Path 231"
							className={fill}
							d="M183.23,10.56a5.19,5.19,0,0,0-4.92-5.45h-.45a8.63,8.63,0,0,0-6.8,3.4c-1,1.53-1.34,2.33-2.06,5.73l-6.89,32.5c-1.08,5-3.23,7.7-6.27,7.7A7,7,0,0,1,152,52.91c-1.88-1.25-2.6-1.52-4-1.52A8,8,0,0,0,140.08,59c0,4.74,5.91,8.24,14,8.24,5.82,0,11.55-2,14.86-5.2s5.28-7.79,6.89-15.31l6.9-32.5A13.74,13.74,0,0,0,183.23,10.56Z"
						/>
						<path
							id="Path_232"
							data-name="Path 232"
							className={fill}
							d="M212.67,19.43A28.12,28.12,0,0,0,192,29a32.26,32.26,0,0,0-7.16,19.78c0,10.21,7.43,17.82,17.37,17.82A27.73,27.73,0,0,0,222.79,57,32.57,32.57,0,0,0,230,37.42C230,27.13,222.61,19.43,212.67,19.43Zm-8,34.92c-3.85,0-6.63-3.23-6.63-7.61,0-7.79,5.55-15,11.64-15,4.3,0,7.08,3.22,7.08,8.23C216.79,47.27,210.88,54.35,204.71,54.35Z"
						/>
						<path
							id="Path_233"
							data-name="Path 233"
							className={fill}
							d="M264,19.43c-3.94,0-6.89,1-11.37,3.85l3-14.5a14.5,14.5,0,0,0,.54-3.58A5,5,0,0,0,251.41,0H251a8.3,8.3,0,0,0-6.45,3.23c-1,1.43-1.34,2.32-2,5.55L231.82,59.36a7.55,7.55,0,0,0-.27,1.88c0,3,2.33,5.1,5.55,5.1,3.05,0,5.19-1.52,7.16-4.92,2.06,3.67,4.93,5.19,9.76,5.19a24.37,24.37,0,0,0,18.18-8.68,33.89,33.89,0,0,0,7.88-20.68C280.08,27.13,273.09,19.43,264,19.43Zm-9,34.91c-4.12,0-7-3.22-7-7.79,0-7.7,5.73-14.86,12-14.86,4,0,6.72,3.14,6.72,8.06,0,7.43-5.73,14.6-11.73,14.6Z"
						/>
						<path
							id="Path_234"
							data-name="Path 234"
							className={fill}
							d="M308,19.43c-11.37,0-20.24,7.7-20.24,17.46,0,3.49,1.61,5.91,5.11,7.88a46,46,0,0,0,7.07,3.31c3.4,1.34,4.3,2.06,4.3,3.4,0,1.79-2.24,3.49-4.57,3.49a10.91,10.91,0,0,1-4.92-1.43c-4.66-2.33-4.66-2.33-6.27-2.33-3.31,0-6.8,3.58-6.8,6.8,0,4.74,6.8,8.59,15,8.59,6.18,0,12-2.14,15.49-5.73,3-3.22,5.1-7.78,5.1-11.46a8.85,8.85,0,0,0-2-5.64c-1.88-2.41-3.22-3.31-8.68-5.73s-5.82-2.68-5.82-4.2,1.7-2.78,4-2.78a10.29,10.29,0,0,1,4.65,1.34c3.67,1.7,3.76,1.79,5.19,1.79,3.05,0,6.36-3.49,6.36-6.62C321.07,23.1,315.25,19.43,308,19.43Z"
						/>
						<path
							id="Path_235"
							data-name="Path 235"
							className={fill}
							d="M355,6h-12.9A9.6,9.6,0,0,0,334.57,9c-1.43,1.52-2,2.87-2.86,7L323.29,55.6a18.4,18.4,0,0,0-.62,4.12,5.35,5.35,0,0,0,1.88,4.3c1.34,1.25,2.32,1.43,6.44,1.52l13.34.18a32.9,32.9,0,0,0,24.26-9.67,40.8,40.8,0,0,0,10.93-27.49C379.52,14.06,370.74,6,355,6Zm4.74,40a18,18,0,0,1-15.49,7.79h-6.8l7.61-35.9h5.19c10.12,0,14.6,3.85,14.6,12.35A27.75,27.75,0,0,1,359.73,46Z"
						/>
						<path
							id="Path_236"
							data-name="Path 236"
							className={fill}
							d="M409,19.43A28.1,28.1,0,0,0,388.28,29a32.26,32.26,0,0,0-7.16,19.78c0,10.21,7.43,17.82,17.36,17.82A27.75,27.75,0,0,0,419.08,57a32.57,32.57,0,0,0,7.16-19.61C426.24,27.13,418.9,19.43,409,19.43Zm-8,34.91c-3.85,0-6.62-3.22-6.62-7.61,0-7.78,5.55-15,11.64-15,4.3,0,7.07,3.23,7.07,8.24,0,7.34-5.91,14.42-12.09,14.42Z"
						/>
						<path
							id="Path_237"
							data-name="Path 237"
							className={fill}
							d="M461.32,19.43c-5.1,0-8.5,1.25-13.16,4.83-.63-3.13-2.24-4.56-5.1-4.56-4.21,0-7.34,2.86-8.33,7.7l-6.44,30.17a15.74,15.74,0,0,0-.45,3.49,5,5,0,0,0,4.72,5.28H433a8.39,8.39,0,0,0,6.45-3.22c1-1.43,1.25-2.33,2-5.55l4-19c.9-4.21,5.1-7.79,9.13-7.79,3.49,0,5.91,2.24,5.91,5.46a11.5,11.5,0,0,1-.36,2.86l-3.94,18.45a17,17,0,0,0-.45,3.49,5,5,0,0,0,4.72,5.28H461a8.37,8.37,0,0,0,6.44-3.22c1-1.43,1.25-2.33,2-5.55L474,36a27.73,27.73,0,0,0,.71-5.37C474.66,24.08,469.11,19.43,461.32,19.43Z"
						/>
						<path
							id="Path_238"
							data-name="Path 238"
							className={fill}
							d="M522,37.42c0-10.47-7.25-18-17.37-18a28,28,0,0,0-19.79,8.5c-5.1,5.37-8.59,13.88-8.59,21a18.47,18.47,0,0,0,5,12.26c3.5,3.59,8.33,5.37,14.69,5.37,6.17,0,12.89-1.78,17.36-4.74,3-2,4.57-4,4.57-6.36,0-2.68-1.79-4.65-4.21-4.65a8.82,8.82,0,0,0-3,.62c-7.61,3.4-8.42,3.67-11.73,3.67-5.19,0-8-2.5-8.68-7.78h24.53C520,47.36,522,44.59,522,37.42Zm-30.35,1c3.13-5.55,6.71-8.24,10.92-8.24A6.73,6.73,0,0,1,508,32.5c1,1.25,1.35,2.77,1.44,5.91Z"
						/>
						<path
							id="Path_239"
							data-name="Path 239"
							className={fill}
							d="M59.78,34.47a6.46,6.46,0,0,0-5.17-4c-.29,0-15.88-.12-15.88-.12-3.89-.1-5.24.17-6.85,1.42a7.57,7.57,0,0,0-3,5.73,5,5,0,0,0,2.06,4.21c1.25.72,2,.8,4.92.8h6.63C39.05,50.84,34,54.87,26.87,54.87c-7.7,0-12-4.57-12-12.9a28.62,28.62,0,0,1,5.28-16.65c4.12-5.55,9.49-8.69,14.77-8.69a15.7,15.7,0,0,1,8.15,2.24c5,3.67,5.55,3.94,7.52,3.94,3.76,0,7.43-3.58,7.43-7.25,0-5.91-9.4-11.19-20-11.19A37,37,0,0,0,10.39,16.55,42.12,42.12,0,0,0,0,43.68,23.35,23.35,0,0,0,4,57.47C8.43,64,15,67.13,24,67.13a34.46,34.46,0,0,0,9.53-1.31l.34-.1h0a32,32,0,0,0,8.52-4,16.16,16.16,0,0,0,5.8-8.87h0l-.12.9c-.31,2.44-.31,3,.15,4.22a5,5,0,0,0,8.6,1.11c.76-1.08.9-1.68,1.21-4.05L60,40C60.38,36.81,60.38,36.09,59.78,34.47Z"
						/>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default Logo;

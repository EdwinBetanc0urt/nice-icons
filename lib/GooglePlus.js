import React from "react";

const SvgGooglePlus = ({ width = 24, height = 24, ...props }) => (
	<svg fill="none" className="icon" aria-hidden="true" {...props}>
		<path
			d="M311.417 259.805c0 26.958-5.639 50.967-16.917 72.028-11.278 21.06-27.352 37.52-48.222 49.379C225.407 393.071 201.491 399 174.528 399c-19.315 0-37.787-3.759-55.417-11.276-17.63-7.517-32.796-17.626-45.5-30.327s-22.815-27.865-30.333-45.491C35.759 294.28 32 275.811 32 256.5s3.76-37.78 11.278-55.406c7.518-17.626 17.63-32.79 30.333-45.491 12.704-12.701 27.87-22.81 45.5-30.327 17.63-7.517 36.102-11.276 55.417-11.276 37.074 0 68.898 12.442 95.472 37.326l-38.694 37.132c-15.167-14.646-34.093-21.968-56.778-21.968-15.945 0-30.69 4.018-44.236 12.053-13.547 8.035-24.273 18.955-32.18 32.757-7.908 13.803-11.862 28.87-11.862 45.2 0 16.33 3.954 31.397 11.861 45.2 7.908 13.802 18.634 24.722 32.181 32.757 13.546 8.036 28.291 12.053 44.236 12.053 10.759 0 20.643-1.49 29.653-4.471 9.009-2.981 16.43-6.707 22.263-11.178 5.834-4.472 10.922-9.559 15.264-15.261 4.343-5.703 7.519-11.082 9.528-16.136 2.009-5.055 3.403-9.85 4.181-14.386h-80.889v-48.991h134.555c1.556 8.165 2.334 16.071 2.334 23.718zM480 236.087v40.826h-40.639v40.631h-40.833v-40.631h-40.639v-40.826h40.639v-40.631h40.833v40.631H480z"
			fill="currentColor"
		/>
	</svg>
);

export default SvgGooglePlus;
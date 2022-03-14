import React from 'react';

const CancelIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
    <svg
    onClick={props.closeModal}
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.87507 15.875C7.58721 15.875 7.29921 15.7651 7.07983 15.5454L0.329834 8.79541C-0.109619 8.35596 -0.109619 7.64404 0.329834 7.20459L7.07983 0.45459C7.51928 0.0151367 8.2312 0.0151367 8.67065 0.45459C9.1101 0.894043 9.1101 1.60596 8.67065 2.04541L2.71589 8L8.67135 13.9555C9.11081 14.3949 9.11081 15.1068 8.67135 15.5463C8.45163 15.766 8.16335 15.875 7.87507 15.875Z"
        fill="#505050"/>
    </svg>
	)
}

export default CancelIcon;
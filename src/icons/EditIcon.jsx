import React from 'react';

const EditIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
    <svg
      onClick={props.closeDropdown}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.0591 11.3731L12.7512 0.679268C13.6301 -0.199567 15.0574 -0.199567 15.9363 0.679268L17.3215 2.06548C17.4305 2.17517 17.5254 2.29364 17.6098 2.41845C18.1863 3.29173 18.0914 4.47896 17.3215 5.24888L6.62695 15.9399C6.58125 15.9856 6.53554 15.9997 6.48632 16.0735C6.14882 16.3723 5.74804 16.5622 5.31211 16.7204L1.08175 17.9649C0.785735 18.0528 0.465461 17.9719 0.247141 17.7223C0.0288132 17.536 -0.0528127 17.2161 0.0343046 16.9172L1.27863 12.6879C1.42488 12.1922 1.69312 11.7387 2.0591 11.3731ZM2.89757 13.1625L2.08968 15.9118L4.8375 15.1032C5.03086 15.0364 5.2664 14.9133 5.43515 14.7481L13.4648 6.71489L11.2535 4.50357L3.2523 12.5649C3.23156 12.586 3.21152 12.6071 3.19218 12.6317C3.05648 12.7829 2.95558 12.9657 2.89757 13.1625Z"
          fill="#242424"/>
     </svg>
	)
}

export default EditIcon;
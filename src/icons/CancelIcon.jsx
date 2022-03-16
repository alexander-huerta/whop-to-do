import React from 'react';

const CancelIcon = (props: React.SVGProps<SVGSVGElement>) => {

	return (
    <>
    <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"

    xmlns="http://www.w3.org/2000/svg"
    {...props}>
      <path
        d="M7.87507 15.875C7.58721 15.875 7.29921 15.7651 7.07983 15.5454L0.329834 8.79541C-0.109619 8.35596 -0.109619 7.64404 0.329834 7.20459L7.07983 0.45459C7.51928 0.0151367 8.2312 0.0151367 8.67065 0.45459C9.1101 0.894043 9.1101 1.60596 8.67065 2.04541L2.71589 8L8.67135 13.9555C9.11081 14.3949 9.11081 15.1068 8.67135 15.5463C8.45163 15.766 8.16335 15.875 7.87507 15.875Z"
        />
    </svg>

    <svg
        width="60"
        height="15"
        viewBox="0 0 60 15"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
          <path
            d="M11.9382 5.49219H9.13849C9.08736 5.12997 8.98295 4.80824 8.82528 4.52699C8.66761 4.24148 8.4652 3.99858 8.21804 3.7983C7.97088 3.59801 7.68537 3.4446 7.36151 3.33807C7.0419 3.23153 6.6946 3.17827 6.3196 3.17827C5.64205 3.17827 5.05185 3.34659 4.54901 3.68324C4.04617 4.01562 3.65625 4.50142 3.37926 5.14062C3.10227 5.77557 2.96378 6.54687 2.96378 7.45455C2.96378 8.38778 3.10227 9.17187 3.37926 9.80682C3.66051 10.4418 4.05256 10.9212 4.5554 11.245C5.05824 11.5689 5.63992 11.7308 6.30043 11.7308C6.67117 11.7308 7.0142 11.6818 7.32955 11.5838C7.64915 11.4858 7.93253 11.343 8.17969 11.1555C8.42685 10.9638 8.63139 10.7315 8.79332 10.4588C8.95952 10.1861 9.07457 9.875 9.13849 9.52557L11.9382 9.53835C11.8658 10.1392 11.6847 10.7188 11.3949 11.277C11.1094 11.831 10.7237 12.3274 10.2379 12.7663C9.75639 13.201 9.18111 13.5462 8.51207 13.8018C7.8473 14.0533 7.09517 14.179 6.25568 14.179C5.08807 14.179 4.04403 13.9148 3.12358 13.3864C2.20739 12.858 1.48295 12.093 0.950284 11.0916C0.421875 10.0902 0.15767 8.87784 0.15767 7.45455C0.15767 6.02699 0.426136 4.8125 0.963068 3.81108C1.5 2.80966 2.22869 2.04687 3.14915 1.52273C4.0696 0.994318 5.10511 0.730113 6.25568 0.730113C7.0142 0.730113 7.71733 0.836647 8.36506 1.04972C9.01705 1.26278 9.59446 1.57386 10.0973 1.98295C10.6001 2.38778 11.0092 2.88423 11.3246 3.4723C11.6442 4.06037 11.8487 4.73366 11.9382 5.49219ZM16.5815 14.1854C15.9551 14.1854 15.3969 14.0767 14.9068 13.8594C14.4167 13.6378 14.029 13.3118 13.7435 12.8814C13.4622 12.4467 13.3216 11.9055 13.3216 11.2578C13.3216 10.7124 13.4217 10.2543 13.622 9.88352C13.8223 9.51278 14.095 9.21449 14.4402 8.98864C14.7854 8.76278 15.1774 8.59233 15.6163 8.47727C16.0595 8.36222 16.524 8.28125 17.0098 8.23438C17.5808 8.17472 18.041 8.11932 18.3905 8.06818C18.7399 8.01278 18.9935 7.93182 19.1511 7.82528C19.3088 7.71875 19.3876 7.56108 19.3876 7.35227V7.31392C19.3876 6.90909 19.2598 6.59588 19.0041 6.37429C18.7527 6.1527 18.3947 6.0419 17.9302 6.0419C17.4402 6.0419 17.0503 6.15057 16.7605 6.3679C16.4707 6.58097 16.279 6.84943 16.1852 7.1733L13.6667 6.96875C13.7946 6.37216 14.046 5.85653 14.421 5.42188C14.796 4.98295 15.2797 4.64631 15.872 4.41193C16.4686 4.1733 17.1589 4.05398 17.943 4.05398C18.4885 4.05398 19.0105 4.1179 19.5091 4.24574C20.0119 4.37358 20.4572 4.57173 20.845 4.8402C21.2371 5.10866 21.546 5.45384 21.7719 5.87571C21.9977 6.29332 22.1106 6.79403 22.1106 7.37784V14H19.5283V12.6385H19.4515C19.2939 12.9453 19.0829 13.2159 18.8187 13.4503C18.5545 13.6804 18.2371 13.8615 17.8663 13.9936C17.4956 14.1214 17.0673 14.1854 16.5815 14.1854ZM17.3613 12.3061C17.7619 12.3061 18.1156 12.2273 18.4224 12.0696C18.7292 11.9077 18.97 11.6903 19.1447 11.4176C19.3194 11.1449 19.4068 10.8359 19.4068 10.4908V9.44886C19.3216 9.50426 19.2044 9.5554 19.0552 9.60227C18.9104 9.64489 18.7463 9.68537 18.5631 9.72372C18.3798 9.75781 18.1966 9.78977 18.0133 9.8196C17.8301 9.84517 17.6639 9.86861 17.5148 9.88991C17.1952 9.93679 16.916 10.0114 16.6774 10.1136C16.4388 10.2159 16.2534 10.3544 16.1213 10.5291C15.9892 10.6996 15.9231 10.9126 15.9231 11.1683C15.9231 11.5391 16.0574 11.8224 16.3258 12.0185C16.5986 12.2102 16.9437 12.3061 17.3613 12.3061ZM26.8562 8.32386V14H24.1332V4.18182H26.7284V5.91406H26.8434C27.0608 5.34304 27.4251 4.89133 27.9365 4.55895C28.4478 4.2223 29.0679 4.05398 29.7966 4.05398C30.4784 4.05398 31.0728 4.20312 31.5799 4.50142C32.087 4.79972 32.4812 5.22585 32.7625 5.77983C33.0437 6.32955 33.1843 6.9858 33.1843 7.74858V14H30.4613V8.23438C30.4656 7.63352 30.3122 7.16477 30.0011 6.82812C29.69 6.48722 29.2618 6.31676 28.7163 6.31676C28.3498 6.31676 28.026 6.3956 27.7447 6.55327C27.4677 6.71094 27.2504 6.94105 27.0927 7.24361C26.9393 7.5419 26.8605 7.90199 26.8562 8.32386ZM39.6766 14.1918C38.6709 14.1918 37.8058 13.9787 37.0814 13.5526C36.3612 13.1222 35.8072 12.5256 35.4195 11.7628C35.0359 11 34.8442 10.1222 34.8442 9.12926C34.8442 8.12358 35.0381 7.24148 35.4258 6.48295C35.8179 5.72017 36.374 5.12571 37.0942 4.69957C37.8143 4.26918 38.6709 4.05398 39.6638 4.05398C40.5203 4.05398 41.2703 4.20952 41.9138 4.5206C42.5572 4.83168 43.0665 5.26847 43.4415 5.83097C43.8165 6.39347 44.0231 7.05398 44.0615 7.8125H41.4919C41.4195 7.32244 41.2277 6.92827 40.9166 6.62997C40.6098 6.32741 40.2071 6.17614 39.7085 6.17614C39.2866 6.17614 38.918 6.29119 38.6027 6.52131C38.2916 6.74716 38.0487 7.07741 37.874 7.51207C37.6993 7.94673 37.6119 8.47301 37.6119 9.09091C37.6119 9.71733 37.6972 10.25 37.8676 10.6889C38.0423 11.1278 38.2874 11.4624 38.6027 11.6925C38.918 11.9226 39.2866 12.0376 39.7085 12.0376C40.0196 12.0376 40.2987 11.9737 40.5459 11.8459C40.7973 11.718 41.004 11.5327 41.1659 11.2898C41.3321 11.0426 41.4408 10.7464 41.4919 10.4013H44.0615C44.0189 11.1513 43.8143 11.8118 43.4479 12.3828C43.0856 12.9496 42.5849 13.3928 41.9457 13.7124C41.3065 14.032 40.5501 14.1918 39.6766 14.1918ZM50.1894 14.1918C49.1794 14.1918 48.3101 13.9872 47.5814 13.5781C46.857 13.1648 46.2987 12.581 45.9067 11.8267C45.5146 11.0682 45.3186 10.1712 45.3186 9.13565C45.3186 8.12571 45.5146 7.23935 45.9067 6.47656C46.2987 5.71378 46.8506 5.11932 47.5622 4.69318C48.2781 4.26705 49.1176 4.05398 50.0807 4.05398C50.7284 4.05398 51.3314 4.15838 51.8896 4.36719C52.4521 4.57173 52.9422 4.88068 53.3598 5.29403C53.7817 5.70739 54.1098 6.22727 54.3442 6.85369C54.5786 7.47585 54.6958 8.20455 54.6958 9.03977V9.78764H46.4053V8.10014H52.1325C52.1325 7.7081 52.0473 7.3608 51.8769 7.05824C51.7064 6.75568 51.4699 6.51918 51.1673 6.34872C50.869 6.17401 50.5217 6.08665 50.1254 6.08665C49.7121 6.08665 49.3456 6.18253 49.026 6.37429C48.7107 6.56179 48.4635 6.81534 48.2845 7.13494C48.1056 7.45028 48.0139 7.80185 48.0097 8.18963V9.79403C48.0097 10.2798 48.0992 10.6996 48.2781 11.0533C48.4614 11.407 48.7192 11.6797 49.0516 11.8714C49.384 12.0632 49.7781 12.1591 50.2341 12.1591C50.5367 12.1591 50.8137 12.1165 51.0651 12.0312C51.3165 11.946 51.5317 11.8182 51.7107 11.6477C51.8896 11.4773 52.026 11.2685 52.1198 11.0213L54.6382 11.1875C54.5104 11.7926 54.2483 12.321 53.852 12.7727C53.46 13.2202 52.9529 13.5696 52.3307 13.821C51.7128 14.0682 50.999 14.1918 50.1894 14.1918ZM59.1058 0.909091V14H56.3827V0.909091H59.1058Z"/>
        </svg>
    </>
	)
}

export default CancelIcon;
type Props = {
  className?: string;
};

export default function GithubIcon({ className }: Props) {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.5 0C9.455 0 0.5 9.09522 0.5 20.3132C0.5 29.8316 6.95333 37.796 15.6533 40C15.56 39.7258 15.5 39.4075 15.5 39.0131V35.5413C14.6883 35.5413 13.3283 35.5413 12.9867 35.5413C11.6183 35.5413 10.4017 34.9437 9.81167 33.8333C9.15667 32.5992 9.04333 30.7118 7.42 29.5573C6.93833 29.1731 7.305 28.7347 7.86 28.7939C8.885 29.0884 9.735 29.8028 10.535 30.8625C11.3317 31.9238 11.7067 32.1642 13.195 32.1642C13.9167 32.1642 14.9967 32.1219 16.0133 31.9594C16.56 30.5493 17.505 29.251 18.66 28.6382C12 27.9424 8.82167 24.5772 8.82167 20.0085C8.82167 18.0415 9.64667 16.1388 11.0483 14.5358C10.5883 12.9446 10.01 9.69953 11.225 8.46382C14.2217 8.46382 16.0333 10.4376 16.4683 10.9708C17.9617 10.4511 19.6017 10.1566 21.325 10.1566C23.0517 10.1566 24.6983 10.4511 26.195 10.9742C26.625 10.4444 28.4383 8.46382 31.4417 8.46382C32.6617 9.70123 32.0767 12.9598 31.6117 14.5476C33.005 16.1473 33.825 18.0449 33.825 20.0085C33.825 24.5738 30.6517 27.9374 24.0017 28.6365C25.8317 29.6064 27.1667 32.3318 27.1667 34.3851V39.0131C27.1667 39.1892 27.1283 39.3161 27.1083 39.4668C34.9017 36.6923 40.5 29.1765 40.5 20.3132C40.5 9.09522 31.545 0 20.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

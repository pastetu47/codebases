import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const JustifiedRightIcon = ({
  fillColor,
  className,
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    viewBox="0 0 39 28"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g id="Cover-art---Web" fill="none" fillRule="evenodd">
      <g
        id="Add-text"
        transform="translate(-984 -322)"
        fill={fillColor}
        fillRule="nonzero"
      >
        <g id="Group-20" transform="translate(683 322)">
          <g id="justified_right" transform="translate(301)">
            <path
              d="M36.9444444,5.40012479e-12 L1.05555556,5.40012479e-12 C0.464444444,5.40012479e-12 5.68434189e-14,0.456923077 5.68434189e-14,1.03846154 C5.68434189e-14,1.62 0.464444444,2.07692308 1.05555556,2.07692308 L36.9444444,2.07692308 C37.5355556,2.07692308 38,1.62 38,1.03846154 C38,0.456923077 37.5355556,5.40012479e-12 36.9444444,5.40012479e-12 Z"
              id="Shape"
            />
            <path
              d="M36.9444444,6 L1.05555556,6 C0.464444444,6 5.68434189e-14,6.45692308 5.68434189e-14,7.03846154 C5.68434189e-14,7.62 0.464444444,8.07692308 1.05555556,8.07692308 L36.9444444,8.07692308 C37.5355556,8.07692308 38,7.62 38,7.03846154 C38,6.45692308 37.5355556,6 36.9444444,6 Z"
              id="Shape"
            />
            <path
              d="M36.9444444,13 L1.05555556,13 C0.464444444,13 5.68434189e-14,13.4569231 5.68434189e-14,14.0384615 C5.68434189e-14,14.62 0.464444444,15.0769231 1.05555556,15.0769231 L36.9444444,15.0769231 C37.5355556,15.0769231 38,14.62 38,14.0384615 C38,13.4569231 37.5355556,13 36.9444444,13 Z"
              id="Shape"
            />
            <path
              d="M36.9444444,19 L1.05555556,19 C0.464444444,19 5.68434189e-14,19.4569231 5.68434189e-14,20.0384615 C5.68434189e-14,20.62 0.464444444,21.0769231 1.05555556,21.0769231 L36.9444444,21.0769231 C37.5355556,21.0769231 38,20.62 38,20.0384615 C38,19.4569231 37.5355556,19 36.9444444,19 Z"
              id="Shape"
            />
            <path
              d="M37.2777778,25 L14.0555556,25 C13.4644444,25 13,25.4569231 13,26.0384615 C13,26.62 13.4644444,27.0769231 14.0555556,27.0769231 L37.2777778,27.0769231 C37.8688889,27.0769231 38.3333333,26.62 38.3333333,26.0384615 C38.3333333,25.4569231 37.8688889,25 37.2777778,25 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

JustifiedRightIcon.defaultProps = defaultProps;

export default JustifiedRightIcon;
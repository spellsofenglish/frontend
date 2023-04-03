/**
 * @prettier
 */

import React from 'react';

const icons = {
  eyeShown: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={width}
        height={height}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.07868 8.3115C1.97402 8.1175 1.97402 7.88216 2.07868 7.68816C3.34002 5.3555 5.67002 3.3335 8.00002 3.3335C10.33 3.3335 12.66 5.3555 13.9214 7.68883C14.026 7.88283 14.026 8.11816 13.9214 8.31216C12.66 10.6448 10.33 12.6668 8.00002 12.6668C5.67002 12.6668 3.34002 10.6448 2.07868 8.3115Z"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  eyeHidden: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={width}
        height={height}
      >
        <path
          d="M8.00002 12.6668C7.43869 12.6668 6.87669 12.5481 6.33069 12.3368"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.9213 8.31201C12.66 10.6447 10.33 12.6667 8 12.6667"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.7194 5.94727C13.18 6.4866 13.5894 7.0746 13.9214 7.6886C14.026 7.8826 14.026 8.11793 13.9214 8.31193"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.33337 12.6668L12.6667 3.3335"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.51533 9.4849C5.69533 8.6649 5.69533 7.3349 6.51533 6.5149C7.33533 5.6949 8.66533 5.6949 9.48533 6.5149"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.3627 4.6375C10.3313 3.8395 9.16535 3.3335 8.00002 3.3335C5.67002 3.3335 3.34002 5.3555 2.07868 7.68883C1.97402 7.88283 1.97402 8.11816 2.07868 8.31216C2.70935 9.47816 3.60668 10.5662 4.63735 11.3635"
          stroke={fill}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
};

export default icons;

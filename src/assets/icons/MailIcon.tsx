import * as React from "react";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 50 50"
      fill="currentColor"
      {...props}
    >
      <path d="M14 4C8.489 4 4 8.489 4 14v22c0 5.511 4.489 10 10 10h22c5.511 0 10-4.489 10-10V14c0-5.511-4.489-10-10-10H14zm-1 12h24c.18 0 .35.02.51.07l-9.83 9.82a3.801 3.801 0 01-5.37 0l-9.82-9.82c.16-.05.33-.07.51-.07zm-1.93 1.49L18.59 25l-7.52 7.51c-.05-.16-.07-.33-.07-.51V18c0-.18.02-.35.07-.51zm27.86 0c.05.16.07.33.07.51v14c0 .18-.02.35-.07.51L31.4 25l7.53-7.51zM20 26.41l.89.9a5.782 5.782 0 004.1 1.69c1.49 0 2.97-.56 4.1-1.69l.9-.9 7.52 7.52c-.16.05-.33.07-.51.07H13c-.18 0-.35-.02-.51-.07L20 26.41z" />
    </svg>
  );
}

export default React.memo(MailIcon);

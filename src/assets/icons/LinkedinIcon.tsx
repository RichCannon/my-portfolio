import * as React from "react";

function Linkedinicon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 30 30"
      className={className}
      fill="currentColor"
      {...props}
    >
      <path
        className="origin-center scale-125"
        d="M24 4H6a2 2 0 00-2 2v18a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM10.954 22h-2.95v-9.492h2.95V22zM9.449 11.151a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zM22.004 22h-2.948v-4.616c0-1.101-.02-2.517-1.533-2.517-1.535 0-1.771 1.199-1.771 2.437V22h-2.948v-9.492h2.83v1.297h.04c.394-.746 1.356-1.533 2.791-1.533 2.987 0 3.539 1.966 3.539 4.522V22z"
      />
    </svg>
  );
}

export default React.memo(Linkedinicon);

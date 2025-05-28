import * as React from "react";

function ErrorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__lucide prefix__lucide-circle-alert prefix__me-3 prefix__-mt-0_5 prefix__inline-flex prefix__text-red-500"
      aria-hidden="true"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M12 8v4M12 16h.01" />
    </svg>
  );
}

export default React.memo(ErrorIcon);

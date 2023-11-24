
import { SVGProps } from "react"
export const BurgerSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.8 16.1h22M5.8 8.1h22M5.8 24.1h22"
    />
  </svg>
)

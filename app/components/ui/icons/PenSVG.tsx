import { SVGProps } from "react"

const PenSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="100%"
    height="auto"
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M18.389.108c-.794.215-1.194.494-2.496 1.783-.687.666-1.366 1.404-1.517 1.626-.436.658-.608 1.245-.608 2.133 0 1.024.236 1.697.866 2.478l.229.293-1.402.308c-.773.165-2.697.587-4.27.938l-2.861.63-.258.28c-.243.257-.45.859-3.168 9.007C1.309 24.39 0 28.398 0 28.506c0 .107.036.28.072.394.1.265 2.689 2.87 2.982 3 .129.057.35.1.5.1.273 0 17.124-5.578 17.596-5.821.45-.237.472-.301 1.452-4.755a437.5 437.5 0 0 0 .93-4.274c0-.029.114.043.25.157.872.766 2.231 1.11 3.354.845.987-.236 1.316-.458 2.711-1.826C31.707 14.493 32 13.985 32 12.524c0-.938-.143-1.439-.615-2.148-.15-.222-2.332-2.456-4.935-5.055C21.429.316 21.486.366 20.492.101c-.53-.136-1.588-.136-2.103.007Zm1.745 2.277c.508.244 9.255 9.015 9.47 9.495.193.43.186.88-.021 1.324-.194.409-2.118 2.363-2.547 2.585-.336.172-1.094.172-1.43 0-.136-.071-2.275-2.148-4.75-4.618-4.813-4.797-4.835-4.826-4.835-5.52.008-.566.215-.889 1.345-2.034 1.145-1.153 1.51-1.404 2.089-1.404.193 0 .465.072.68.172Zm-.894 10.39 2.389 2.391-.994 4.533-1.002 4.532-7.645 2.556c-4.206 1.41-7.66 2.55-7.668 2.542-.014-.014 1.502-1.546 3.369-3.415l3.39-3.394.415.129c2.882.916 5.464-2.005 4.177-4.733a4.696 4.696 0 0 0-.608-.867c-1.28-1.381-3.455-1.432-4.842-.114-.951.916-1.288 2.27-.88 3.559l.129.415-3.39 3.394c-1.867 1.869-3.398 3.386-3.412 3.372-.007-.007 1.13-3.458 2.539-7.668l2.553-7.655 4.4-.98c2.417-.545 4.462-.989 4.54-.989.101-.007.916.766 2.54 2.392Zm-6.201 5.578c.737.307.915 1.267.343 1.84-.465.465-1.123.465-1.588 0-.886-.88.093-2.327 1.245-1.84Z"
    />
  </svg>
)
export default PenSVG

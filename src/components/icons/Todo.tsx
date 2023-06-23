import type { SVGProps } from 'react'
const TodoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.624 4.067h-6.4a.4.4 0 0 1-.424-.4 1.856 1.856 0 0 1 1.048-1.8c.193-.095.397-.162.608-.2a2 2 0 0 1 3.944 0c.21.051.412.132.6.24a1.848 1.848 0 0 1 1.024 1.76.4.4 0 0 1-.4.4Zm-4.8-1.6a1.6 1.6 0 0 0-.64.168.968.968 0 0 0-.512.632H11.2a.968.968 0 0 0-.56-.632 1.6 1.6 0 0 0-.64-.168.4.4 0 0 1-.4-.4 1.2 1.2 0 0 0-2.4 0 .4.4 0 0 1-.376.4Zm1.32-.68a.4.4 0 0 1 .28-.12.4.4 0 0 1 0 .8.392.392 0 0 1-.304-.12.408.408 0 0 1-.12-.28.392.392 0 0 1 .144-.28ZM1.6 16.067h13.6V2.69h-2.4v.8h1.648v11.776H2.4V3.492h1.448v-.8H1.6v13.376Zm8-3.2H4.8v-.8h4.8v.8Zm-4.8-2.4h4.8v-.8H4.8v.8Zm6.4-2.4H4.8v-.8h6.4v.8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default TodoIcon

import {CSSProperties} from 'react'

export const BlurryBg = ({
  className,
  style,
}: {
  className: string
  style?: CSSProperties
}) => {
  return (
    <div
      className={`w-52 h-52 absolute -z-10 ${className}`}
      style={{
        background:
          'linear-gradient(160.41deg, rgba(96, 131, 255, 0.45) 5.08%, rgba(212, 94, 253, 0.35) 80.5%)',
        filter: 'blur(100px)',
        ...style,
      }}
    />
  )
}

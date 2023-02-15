import LogoSVG from '~/assets/svg/logo.svg'
import { type ClassNameProp } from '~/types'
import { cx } from '~/utils/cva'

type LogoProps = ClassNameProp

export default function Logo({ className }: LogoProps) {
  return (
    <span className={cx(className)}>
      <LogoSVG className="w-xl h-xl cursor-pointer" />
      <h4 className="p-md focus:decoration-primary m-0 uppercase focus:underline focus:decoration-2 focus:underline-offset-2">
        Chris Carrick
      </h4>
    </span>
  )
}

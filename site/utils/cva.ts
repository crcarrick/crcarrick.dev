import {
  cva as cvaOriginal,
  cx as cxOriginal,
  VariantProps as VariantPropsOriginal,
  type CxOptions,
  type CxReturn,
} from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

type CVAParameters<T> = Parameters<typeof cvaOriginal<T>>

export function cva<T>(...args: CVAParameters<T>) {
  const stylesFn = cvaOriginal(...args)

  return function (...stylesFnArgs: Parameters<typeof stylesFn>) {
    return twMerge(stylesFn(...stylesFnArgs))
  }
}

export function cx<T extends CxOptions>(...classes: T): CxReturn {
  const styles = cxOriginal(...classes)

  return twMerge(styles)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantProps<Component extends (...args: any) => any> =
  VariantPropsOriginal<Component>

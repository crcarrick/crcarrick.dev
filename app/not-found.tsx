/* eslint-disable @next/next/no-img-element */

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-12">
      <img
        alt="404 illustration"
        className="mb-8 w-full max-w-md"
        src="/svg/fourohfour.svg"
      />
      <h1 className="font-heading text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-text-light/60 dark:text-text-dark/60">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </div>
  )
}

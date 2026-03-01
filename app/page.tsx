import fs from 'node:fs'
import path from 'node:path'

export default function Home() {
  const svgPath = path.join(process.cwd(), 'public/svg/desk.svg')
  const svgContent = fs.readFileSync(svgPath, 'utf-8')

  return (
    <div className="flex flex-1 items-center justify-center py-12">
      <div
        className="w-full max-w-lg transition-all [&_svg]:h-auto [&_svg]:w-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  )
}

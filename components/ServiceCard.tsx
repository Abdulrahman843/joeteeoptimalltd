import Link from "next/link"

type Props = {
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ title, description, href = "/contact" }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col gap-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div>
        <Link href={href} className="inline-block bg-brand-600 text-white px-4 py-2 rounded">Get a Free Quote</Link>
      </div>
    </div>
  )
}

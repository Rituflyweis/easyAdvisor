export default function CategoryCard({ title, imageSrc, imageAlt, children }) {
  return (
    <div className="ea-card ea-card-ring p-6">
      <h3 className="text-xl font-semibold heading-gradient">{title}</h3>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          loading="lazy"
          className="mt-4 h-40 w-full rounded-lg object-cover"
        />
      ) : null}
      <div className="mt-4 text-sm text-zinc-700">
        {children}
      </div>
    </div>
  )
}



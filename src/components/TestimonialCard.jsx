function Stars({ count = 5, value = 5, className = '' }) {
  return (
    <span className={`inline-flex align-middle ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-3.5 w-3.5 ${i < value ? 'text-amber-500' : 'text-zinc-300'}`}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  )
}

export default function TestimonialCard({ name, role, rating = 5, text, avatar }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        {avatar ? (
          <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-zinc-200" />
        )}
        <div>
          <div className="text-sm font-semibold text-zinc-900">{name}</div>
          <div className="text-xs text-zinc-500">
            {role} • <Stars value={rating} />
          </div>
        </div>
        <span className="ml-auto rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Verified</span>
      </div>
      <p className="mt-4 line-clamp-3 text-sm text-zinc-700">“{text}”</p>
      <a href="#" className="mt-4 inline-flex items-center text-xs font-medium text-[var(--brand-primary)] hover:underline">Read full story</a>
    </div>
  )
}



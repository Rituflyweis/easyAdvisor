export default function Logo({ size = 32 }) {
  return (
    <img
      src="/asset/logo.png"
      alt="Easy Advising Logo"
      style={{ width: size, height: size }}
      className="rounded-md shadow ring-1 ring-black/5"
    />
  )
}



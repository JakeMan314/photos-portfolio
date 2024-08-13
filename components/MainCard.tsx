import SocialLinks from './SocialLinks'

export default function MainCard() {
  return (
    <div className="after:content relative flex aspect-video flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <div className="absolute inset-0 z-10 flex flex-col justify-center bg-gradient-to-b from-black/10 to-black/80 px-4 py-4">
        <h1 className="mb-2 text-lg font-bold tracking-widest sm:text-xl">
          Jacob & Rachel's Wedding
        </h1>
        <p className="text-sm text-white/75">
          Welcome to our wedding photos! We hope you enjoy them.
        </p>

        
      </div>
    </div>
  )
}

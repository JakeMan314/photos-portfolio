import downloadPhoto from 'utils/downloadPhoto'
import { Twitter } from './Icons'
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline'

export default function UserActions({ currentImage, index }) {
  return (
    <div className="absolute right-0 top-0 flex items-center gap-2 p-3 text-white">
      
      <a
        href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`}
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        target="_blank"
        title="Open full quality version"
        rel="noreferrer"
      >
        <ArrowTopRightOnSquareIcon className="h-5 w-5" />
      </a>
      <button
        onClick={() =>
          downloadPhoto(
            `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`,
            `willianjusten-photo-${index}.jpg`
          )
        }
        className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
        title="Download full quality version"
      >
        <ArrowDownTrayIcon className="h-5 w-5" />
      </button>
    </div>
  )
}

import { useEffect, useId, useRef, useState } from 'react'
import { ImagePlus, X } from 'lucide-react'

const MAX_FILES = 8
const MAX_SIZE_MB = 10
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

/**
 * Multiple image picker with drag & drop and previews.
 * `value` is an array of { id, file, url }; object URLs are revoked on removal/unmount.
 */
export default function ImageUpload({ label, value, onChange, error }) {
  const inputId = useId()
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [notice, setNotice] = useState('')
  const latest = useRef(value)
  latest.current = value

  useEffect(() => () => latest.current.forEach((f) => URL.revokeObjectURL(f.url)), [])

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList)
    const valid = incoming.filter((f) => ACCEPTED.includes(f.type) && f.size <= MAX_SIZE_MB * 1024 * 1024)
    const room = MAX_FILES - value.length
    const accepted = valid.slice(0, room)
    const skipped = incoming.length - accepted.length
    setNotice(
      skipped > 0
        ? `${skipped} file${skipped > 1 ? 's were' : ' was'} skipped — images only (JPG, PNG, WEBP, HEIC), up to ${MAX_SIZE_MB}MB each, maximum ${MAX_FILES}.`
        : '',
    )
    if (accepted.length) {
      onChange([
        ...value,
        ...accepted.map((file) => ({
          id: `${file.name}-${file.lastModified}-${Math.random()}`,
          file,
          url: URL.createObjectURL(file),
        })),
      ])
    }
  }

  const remove = (id) => {
    const target = value.find((f) => f.id === id)
    if (target) URL.revokeObjectURL(target.url)
    onChange(value.filter((f) => f.id !== id))
  }

  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
        {label} <span className="ml-1 normal-case tracking-normal text-taupe/70">(optional, up to {MAX_FILES})</span>
      </p>
      <label
        htmlFor={inputId}
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          addFiles(e.dataTransfer.files)
        }}
        className={`mt-3 flex cursor-pointer flex-col items-center justify-center border border-dashed px-6 py-10 text-center transition-colors ${dragging ? 'border-charcoal bg-ivory' : 'border-charcoal/30 hover:border-charcoal hover:bg-ivory/50'}`}
      >
        <ImagePlus size={26} strokeWidth={1.2} className="text-taupe" />
        <span className="mt-3 font-serif text-xl">Add inspiration images</span>
        <span className="mt-1 text-[13px] text-taupe">
          Drag &amp; drop, or click to browse — photos, sketches, mood boards
        </span>
        <input
          ref={inputRef}
          id={inputId}
          type="file"
          accept={ACCEPTED.join(',')}
          multiple
          className="sr-only"
          onChange={(e) => {
            addFiles(e.target.files)
            e.target.value = ''
          }}
        />
      </label>
      {(notice || error) && <p className="mt-2 text-[12px] text-red-800">{error || notice}</p>}

      {value.length > 0 && (
        <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {value.map((f) => (
            <li key={f.id} className="group relative aspect-square overflow-hidden bg-ivory">
              <img src={f.url} alt={`Inspiration upload: ${f.file.name}`} className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={() => remove(f.id)}
                className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center bg-ivory-light/95 text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
                aria-label={`Remove ${f.file.name}`}
              >
                <X size={14} strokeWidth={1.5} />
              </button>
              <span className="absolute inset-x-0 bottom-0 truncate bg-charcoal/60 px-2 py-1 text-[10px] text-ivory">
                {f.file.name}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import type { FC } from 'react';

interface Props {
    onClose?: () => void,
    title?: string,
    content?: string,
}

export const DetailView: FC<Props> = ({onClose = () => void 0, title = 'Modal title', content = 'This is a simple modal using Tailwind CSS.'}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold text-black">{title}</h2>

        <p className="mb-6 text-sm text-gray-600">{content}</p>

        <div className="flex justify-end gap-2">
          <button
            className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
    )
};

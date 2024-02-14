import { Dispatch, SetStateAction } from 'react';

interface ITextArea {
  hideHeader?: boolean;
  state?: string;
  setState: Dispatch<SetStateAction<string>>;
}

export function AppTextArea({
  hideHeader = false,
  state,
  setState,
}: ITextArea) {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-purple-900 dark:border-gray-600">
        {!hideHeader && (
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
              <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                <button
                  type="button"
                  className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                  </svg>

                  <span className="sr-only">Attach file</span>
                </button>
              </div>
              <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4" />
            </div>
            <div
              id="tooltip-fullscreen"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Show full screen
              <div className="tooltip-arrow" data-popper-arrow />
            </div>
          </div>
        )}
        <div className="px-4 py-2 flex bg-white rounded-b-lg dark:bg-purple-500">
          <textarea
            onChange={(e) => setState(e.target.value)}
            value={state}
            id="editor"
            rows={3}
            className="block focus:outline-none resize-none w-full px-0 text-sm text-black bg-purple-500 border-0 bg-purple-500 focus:ring-0 dark:text-black dark:placeholder-black"
            placeholder="Write an article..."
            required
          />
        </div>
      </div>
    </form>
  );
}

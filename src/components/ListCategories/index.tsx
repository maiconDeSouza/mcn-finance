import { Trash2 } from 'lucide-react'

export function ListCategories() {
  return (
    <section className="w-full mt-6 max-w-[1120px] my-0 mx-auto px-6 py-0">
      <ul className="flex flex-col items-center gap-2">
        <li>
          <article className="w-[22rem]  p-4 flex justify-between rounded-md bg-modal-mcn shadow shadow-black">
            <span>Freelance</span>
            <button type="button" title="apagar" className="hover:text-red-500">
              <Trash2 size={20} />
            </button>
          </article>
        </li>
        <li>
          <article className="w-[22rem]  p-4 flex justify-between rounded-md bg-modal-mcn shadow shadow-black">
            <span>Freelance</span>
            <button type="button" title="apagar" className="hover:text-red-500">
              <Trash2 size={20} />
            </button>
          </article>
        </li>
      </ul>
    </section>
  )
}

import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

export function ListCategories() {
  const { categories, serverDeleteCategory } = useContext(TransactionContext)
  function handleDeleteCategory(id: string) {
    serverDeleteCategory(id)
  }
  return (
    <section className="w-full mt-6 mb-4 max-w-[1120px] my-0 mx-auto px-6 py-0">
      <ul className="flex flex-col items-center gap-2">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <article className="w-[22rem]  p-4 flex justify-between rounded-md bg-modal-mcn shadow shadow-black">
                <span>{category.name}</span>
                <button
                  type="button"
                  title="apagar"
                  className="hover:text-red-500"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  <Trash2 size={20} />
                </button>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

import { Pencil, Trash2 } from 'lucide-react'

export function ListTransactions() {
  return (
    <section className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 mt-12">
      <ul className="flex flex-col gap-2">
        <li className="w-full h-16 bg-transaction-mcn rounded-md">
          <article className="w-full h-full px-4 flex justify-between items-center">
            <div className="w-96">
              <span className="text-xl font-bold">Decriação de Site</span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xl font-bold">R$ 14.590,00</span>
            </div>
            <div className="w-40 h-full p-2 flex items-center justify-between border-l-2 border-r-2 border-sky-950">
              <span>Freelance</span>
              <div className="flex gap-2">
                <button type="button" title="editar">
                  <Pencil
                    size={18}
                    className="text-yellow-500 hover:text-yellow-950"
                  />
                </button>
                <button
                  type="button"
                  title="excluir"
                  className="text-red-500 hover:text-red-950"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="w-40 flex justify-end">
              <span>30/12/23</span>
            </div>
          </article>
        </li>
        <li className="w-full h-16 bg-transaction-mcn rounded-md">
          <article className="w-full h-full px-4 flex justify-between items-center">
            <div className="w-96">
              <span className="text-xl font-bold">Decriação de Site</span>
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-xl font-bold">R$ 14.590,00</span>
            </div>
            <div className="w-40 h-full p-2 flex items-center justify-between border-l-2 border-r-2 border-sky-950">
              <span>Freelance</span>
              <div className="flex gap-2">
                <button type="button" title="editar">
                  <Pencil
                    size={18}
                    className="text-yellow-500 hover:text-yellow-950"
                  />
                </button>
                <button
                  type="button"
                  title="excluir"
                  className="text-red-500 hover:text-red-950"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <div className="w-40 flex justify-end">
              <span>30/12/23</span>
            </div>
          </article>
        </li>
      </ul>
    </section>
  )
}

import { Trash2 } from 'lucide-react'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { utils } from '../../utils'

type Operation = 'income' | 'expense'

interface ListransactionsProps {
  del: boolean
}

export function ListTransactions({ del }: ListransactionsProps) {
  const { formatPrice } = utils()
  const { month, serverDeleteTransaction } = useContext(TransactionContext)

  function formatValue(operation: Operation, value: number) {
    const signaledValue = operation === 'income' ? value : -1 * value

    const formattedValue = formatPrice(signaledValue)

    return formattedValue
  }
  function handleDeleteTransaction(id: string) {
    serverDeleteTransaction(id)
  }
  return (
    <section className="w-full max-w-[1120px] mt-12 mb-4 mx-auto px-6 py-0">
      <ul className="flex flex-col gap-2">
        {month.transactions.map((transaction) => {
          return (
            <li
              className="w-full h-16 bg-transaction-mcn rounded-md"
              key={transaction.id}
            >
              <article className="w-full h-full px-4 flex justify-between items-center">
                <div className="w-96">
                  <span
                    className="text-xl font-bold"
                    title={transaction.description}
                  >
                    {transaction.name}
                  </span>
                </div>
                <div className="flex-1 flex justify-center">
                  <span
                    className={
                      transaction.operation === 'income'
                        ? 'text-xl font-bold text-green-500'
                        : 'text-xl font-bold text-red-500'
                    }
                  >
                    {formatValue(transaction.operation, transaction.value)}
                  </span>
                </div>
                <div className="w-40 h-full p-2 flex items-center justify-between border-l-2 border-r-2 border-sky-950">
                  <span>{transaction.category}</span>
                  {del && (
                    <div className="flex">
                      <button
                        type="button"
                        title="excluir"
                        className="text-red-500 hover:text-red-950"
                        onClick={() => handleDeleteTransaction(transaction.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="w-40 flex justify-end">
                  <span>{transaction.date}</span>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

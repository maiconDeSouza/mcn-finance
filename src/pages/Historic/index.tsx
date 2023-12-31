import { useContext } from 'react'
import { ListTransactions } from '../../components/ListTransactions'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'

export function Historic() {
  const { months, month, onSetMonth } = useContext(TransactionContext)
  const selected = months.some((monthTurn) => monthTurn.name === month.name)
  return (
    <section className="max-w-full">
      <Summary />
      <form className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 mt-12 flex justify-center">
        <select
          name="months"
          id="months"
          title="Selecione o Mẽs"
          className="w-1/2 h-10 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
          onChange={(e) => onSetMonth(e.target.value)}
        >
          {months.map((month) => {
            return (
              <option key={month.id} value={month.name} selected={selected}>
                {month.name}
              </option>
            )
          })}
        </select>
      </form>
      <ListTransactions del={false} />
    </section>
  )
}

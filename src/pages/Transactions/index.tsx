import { ListTransactions } from '../../components/ListTransactions'
import { Summary } from '../../components/Summary'

export function Transactions() {
  return (
    <section className="w-full min-h-pages-mcn">
      <Summary />
      <ListTransactions del={true} />
    </section>
  )
}

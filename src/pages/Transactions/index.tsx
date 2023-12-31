import { ListTransactions } from '../../components/ListTransactions'
import { Search } from '../../components/Search'
import { Summary } from '../../components/Summary'

export function Transactions() {
  return (
    <section className="w-full min-h-pages-mcn">
      <Summary />
      <Search />
      <ListTransactions />
    </section>
  )
}

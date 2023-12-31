import { useContext } from 'react'
import { TransactionContext } from '../contexts/TransactionsContext'
import { utils } from '../utils'

export function useSummary() {
  const { month } = useContext(TransactionContext)
  const { formatPrice } = utils()

  const summary = month.transactions.reduce(
    (acc, transactionCurrent) => {
      if (transactionCurrent.operation === 'income') {
        acc.plus += transactionCurrent.value
        acc.total += transactionCurrent.value
      }
      if (transactionCurrent.operation === 'expense') {
        acc.less += transactionCurrent.value
        acc.total -= transactionCurrent.value
      }
      return acc
    },
    {
      plus: 0,
      less: 0,
      total: 0,
    },
  )

  const total = summary.total
  const plusFormat = formatPrice(summary.plus)
  const lessFormat = formatPrice(summary.less)
  const totalFormat = formatPrice(summary.total)
  return { total, plusFormat, lessFormat, totalFormat }
}

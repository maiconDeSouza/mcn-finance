import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { TransactionProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <TransactionProvider>
      <RouterProvider router={router}></RouterProvider>
    </TransactionProvider>
  )
}

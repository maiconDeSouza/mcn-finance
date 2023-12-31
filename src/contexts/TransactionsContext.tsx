import { ReactNode, createContext, useEffect, useState } from 'react'
import { utils } from '../utils'
import { v4 as uuidv4 } from 'uuid'
import { api } from '../api'

const { getCurrentMonthAndYearName, formatDate } = utils()
const nameCurrentMonthAndYearName = getCurrentMonthAndYearName()

interface ChildrenProps {
  children: ReactNode
}

interface TransactionProps {
  id: string
  name: string
  description: string
  operation: 'income' | 'expense'
  value: number
  category: string
  date: string
}

interface TransactionCreateProps {
  name: string
  description: string
  operation: 'income' | 'expense'
  value: number
  category: string
}

interface MonthProps {
  id: string
  name: string
  transactions: TransactionProps[]
}

interface CategoryProps {
  id: string
  name: string
}

interface TransactionContextProps {
  months: MonthProps[]
  month: MonthProps
  categories: CategoryProps[]
  onSetMonth: (nameMonth: string) => void
  setHome: (home: boolean) => void
  serverCreateCategory: (name: string) => void
  serverDeleteCategory: (id: string) => void
  serverCreateTransaction: (transaction: TransactionCreateProps) => void
  serverDeleteTransaction: (id: string) => void
}

export const TransactionContext = createContext({} as TransactionContextProps)

async function serverMonthsTransaction(nameCurrentMonthAndYearName: string) {
  const response = await api.get('/months')
  const months: MonthProps[] = response.data
  const monthExists = months.find(
    (month) => month.name === nameCurrentMonthAndYearName,
  )

  return { months, monthExists }
}

async function serverCreateMonths(nameCurrentMonthAndYearName: string) {
  const newMonth = {
    id: uuidv4(),
    name: nameCurrentMonthAndYearName,
    transactions: [],
  }
  const response = await api.post('/months', newMonth)
  return response
}

async function serverGetCategories() {
  const response = await api.get('/categories')
  return response
}

export function TransactionProvider({ children }: ChildrenProps) {
  const [months, setMoths] = useState<MonthProps[]>([])
  const [month, setMonth] = useState<MonthProps>({
    id: '',
    name: '',
    transactions: [],
  })
  const [categories, setCategories] = useState<CategoryProps[]>([])
  const [home, setHome] = useState(false)

  useEffect(() => {
    async function server() {
      const response = await serverMonthsTransaction(
        nameCurrentMonthAndYearName,
      )
      const { months, monthExists } = response

      const responseCategories = await serverGetCategories()
      setCategories(responseCategories.data)

      if (monthExists) {
        setMoths(months)
        setMonth(monthExists)
      } else {
        await serverCreateMonths(nameCurrentMonthAndYearName)
      }
    }
    server()
    setHome(false)
  }, [home])

  function onSetMonth(nameMonth: string) {
    const month = months.find((month) => month.name === nameMonth)

    if (month?.name) {
      setMonth(month)
    }
  }

  async function serverCreateCategory(name: string) {
    const newCategory = {
      id: uuidv4(),
      name,
    }
    const res = await api.post('/categories', newCategory)
    setCategories((state) => [...state, res.data])
  }

  async function serverDeleteCategory(id: string) {
    await api.delete(`/categories/${id}`)
    const filter = categories.filter((category) => category.id !== id)
    setCategories(filter)
  }

  async function serverCreateTransaction(transaction: TransactionCreateProps) {
    const newTransaction = {
      id: uuidv4(),
      ...transaction,
      date: formatDate(),
    }
    const month = months.find(
      (month) => month.name === nameCurrentMonthAndYearName,
    )

    if (month?.id) {
      month.transactions.push(newTransaction)
      await api.patch(`/months/${month.id}`, {
        transactions: month.transactions,
      })
      setHome(true)
    }
  }

  async function serverDeleteTransaction(id: string) {
    const month = months.find(
      (month) => month.name === nameCurrentMonthAndYearName,
    )

    if (month?.transactions) {
      const newTransactions = month.transactions.filter(
        (transaction) => transaction.id !== id,
      )
      month.transactions = newTransactions
    }

    if (month?.id) {
      await api.patch(`/months/${month.id}`, {
        transactions: month.transactions,
      })
      setHome(true)
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        months,
        month,
        categories,
        onSetMonth,
        setHome,
        serverCreateCategory,
        serverDeleteCategory,
        serverCreateTransaction,
        serverDeleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

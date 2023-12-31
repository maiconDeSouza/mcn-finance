import { ReactNode, createContext, useEffect, useState } from 'react'
import { utils } from '../utils'
import { v4 as uuidv4 } from 'uuid'
import { api } from '../api'

const { getCurrentMonthAndYearName } = utils()
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

interface MonthProps {
  id: string
  name: string
  transactions: TransactionProps[]
}

interface TransactionContextProps {
  months: MonthProps[]
  nameCurrentMonthAndYearName: string
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

export function TransactionProvider({ children }: ChildrenProps) {
  const [months, setMoths] = useState<MonthProps[]>([])

  useEffect(() => {
    async function server() {
      const response = await serverMonthsTransaction(
        nameCurrentMonthAndYearName,
      )
      const { months, monthExists } = response

      if (monthExists) {
        setMoths(months)
      } else {
        const response = await serverCreateMonths(nameCurrentMonthAndYearName)
        console.log(response)
      }
    }
    server()
  }, [])

  return (
    <TransactionContext.Provider
      value={{ months, nameCurrentMonthAndYearName }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

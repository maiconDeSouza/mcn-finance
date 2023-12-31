import { Link } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.png'
import { X } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TransactionContext } from '../../contexts/TransactionsContext'

const createNewTransactionFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  operation: z.enum(['income', 'expense']),
  value: z.number(),
  category: z.string(),
})

type CreateNewTransactionFormSchemaProps = z.infer<
  typeof createNewTransactionFormSchema
>

export function Header() {
  const { months, nameCurrentMonthAndYearName } = useContext(TransactionContext)
  const { register, handleSubmit, reset } =
    useForm<CreateNewTransactionFormSchemaProps>({
      resolver: zodResolver(createNewTransactionFormSchema),
    })

  function onSubmitForm(data: CreateNewTransactionFormSchemaProps) {
    console.log(data)
    reset()
  }
  const month = months.find(
    (month) => month.name === nameCurrentMonthAndYearName,
  )
  const nameMonth = month ? month.name : 'carregando...'
  return (
    <header className="max-w-screen h-[12.25rem] bg-header-mcn p-6">
      <div className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 flex justify-between items-center">
        <img src={logo} alt="" className="w-20" />
        <div className="flex flex-col items-center gap-5">
          <span className="text-2xl text-title-mcn font-bold">MCN Finance</span>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center w-28 py-3 rounded-md bg-transaction-mcn hover:bg-[#02151c] hover:transition-all hover:duration-300 active:scale-105"
                >
                  Transações
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="flex justify-center items-center w-28 py-3 rounded-md bg-transaction-mcn hover:bg-[#02151c] hover:transition-all hover:duration-300 active:scale-105"
                >
                  Categorias
                </Link>
              </li>
              <li>
                <Link
                  to="/historic"
                  className="flex justify-center items-center w-28 py-3 rounded-md bg-transaction-mcn hover:bg-[#02151c] hover:transition-all hover:duration-300 active:scale-105"
                >
                  Histórico
                </Link>
              </li>
            </ul>
          </nav>
          <span className="text-2xl text-title-mcn font-bold">{nameMonth}</span>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="py-3 px-6 rounded-md text-xl font-bold bg-green-500 hover:bg-green-800 hover:transition-all hover:duration-300 active:scale-105"
            >
              Nova Transação
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-black/75" />

            <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-modal-mcn fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Close className="absolute bg-transparent border-none top-6 right-6 leading-none cursor-pointer text-red-500">
                <X size={24} />
              </Dialog.Close>
              <form
                className="mt-8 flex flex-col gap-4"
                onSubmit={handleSubmit(onSubmitForm)}
              >
                <input
                  type="text"
                  placeholder="Nome da Transação"
                  className="w-full h-10 p-4 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
                  {...register('name', { required: true })}
                />
                <textarea
                  placeholder="Digite a descrição da Transação"
                  className="w-full p-4 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
                  {...register('description', { required: true })}
                ></textarea>
                <select
                  className="w-full h-10 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
                  {...register('operation', { required: true })}
                >
                  <option value="income">Entrada</option>
                  <option value="expense">Saída</option>
                </select>
                <input
                  type="number"
                  placeholder="Valor"
                  className="w-full h-10 p-4 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
                  {...register('value', {
                    required: true,
                    valueAsNumber: true,
                  })}
                />
                <select
                  className="w-full h-10 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
                  {...register('category', { required: true })}
                >
                  <option value="freelance">Freelance</option>
                  <option value="trabalho">Trabalho</option>
                  <option value="lazer">Lazer</option>
                </select>
                <button
                  type="submit"
                  className="h-[58px]  border-none bg-green-500 text-white font-bold py-0 px-5 rounded-md mt-6 cursor-pointer hover:bg-green-700 hover:transition-all hover:duration-300"
                >
                  Cadastrar
                </button>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}

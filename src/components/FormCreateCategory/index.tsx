import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { TransactionContext } from '../../contexts/TransactionsContext'

const formCreateCategorySchema = z.object({
  name: z.string(),
})

type FormCreateCategoryProps = z.infer<typeof formCreateCategorySchema>

export function FormCreateCategory() {
  const { serverCreateCategory } = useContext(TransactionContext)
  const { register, handleSubmit, reset } = useForm<FormCreateCategoryProps>({
    resolver: zodResolver(formCreateCategorySchema),
  })

  function handleSsubmitForm(data: FormCreateCategoryProps) {
    reset()
    serverCreateCategory(data.name)
  }
  return (
    <form
      className="w-full mt-12 max-w-[1120px] my-0 mx-auto px-6 py-0 flex justify-center items-center gap-4"
      onSubmit={handleSubmit(handleSsubmitForm)}
    >
      <input
        type="text"
        placeholder="digite da categoria que gostaria de criar"
        className="w-1/2 h-10 p-4 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
        {...register('name')}
        required
      />
      <button
        type="submit"
        className="py-3 px-6 rounded-md text-xl font-bold bg-green-500 hover:bg-green-800 hover:transition-all hover:duration-300 active:scale-105"
      >
        Criar
      </button>
    </form>
  )
}

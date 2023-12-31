import { ListTransactions } from '../../components/ListTransactions'
import { Summary } from '../../components/Summary'

export function Historic() {
  return (
    <section className="max-w-full">
      <Summary />
      <form className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 mt-12 flex justify-center">
        <select
          name="months"
          id="months"
          title="Selecione o Mẽs"
          className="w-1/2 h-10 border border-border-mcn rounded-md placeholder:text-label-mcn bg-input-mcn"
        >
          <option value="dezembro_2023">dezembro_2023</option>
          <option value="janeiro_2024">janeiro_2024</option>
        </select>
      </form>
      <ListTransactions />
    </section>
  )
}

import { ArrowBigDownDash, ArrowBigUpDash, DollarSign } from 'lucide-react'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const { total, totalFormat, plusFormat, lessFormat } = useSummary()
  const styleTotal =
    total >= 0
      ? 'w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-green-500 text-white shadow shadow-black'
      : 'w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-red-500 text-white shadow shadow-black'

  return (
    <section className="w-full mt-[-1rem] max-w-[1120px] my-0 mx-auto px-6 py-0 flex justify-between">
      <article className="w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-modal-mcn shadow shadow-black">
        <div className="flex justify-between items-center">
          <span className="font-bold">Entradas</span>
          <ArrowBigUpDash size={32} color="#22c55e" />
        </div>
        <span className="font-bold text-3xl">{plusFormat}</span>
      </article>
      <article className="w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-modal-mcn shadow shadow-black">
        <div className="flex justify-between items-center">
          <span className="font-bold">Saídas</span>
          <ArrowBigDownDash size={32} color="#ef4444" />
        </div>
        <span className="font-bold text-3xl">{lessFormat}</span>
      </article>
      <article className={styleTotal}>
        <div className="flex justify-between items-center">
          <span className="font-bold">Total</span>
          <DollarSign size={32} color="#fff" />
        </div>
        <span className="font-bold text-3xl">{totalFormat}</span>
      </article>
    </section>
  )
}

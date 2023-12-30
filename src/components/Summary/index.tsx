import { ArrowBigDownDash, ArrowBigUpDash, DollarSign } from 'lucide-react'
const value = 15000
export function Summary() {
  const total =
    value >= 0
      ? 'w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-green-500 text-white shadow shadow-black'
      : 'w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-red-500 text-white shadow shadow-black'

  return (
    <section className="w-full mt-[-1rem] max-w-[1120px] my-0 mx-auto px-6 py-0 flex justify-between">
      <article className="w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-modal-mcn shadow shadow-black">
        <div className="flex justify-between items-center">
          <span className="font-bold">Entradas</span>
          <ArrowBigUpDash size={32} color="#22c55e" />
        </div>
        <span className="font-bold text-3xl">R$ 14.590,00</span>
      </article>
      <article className="w-[22rem] h-[8.5625rem] p-4 flex flex-col justify-between rounded-md bg-modal-mcn shadow shadow-black">
        <div className="flex justify-between items-center">
          <span className="font-bold">Saídas</span>
          <ArrowBigDownDash size={32} color="#ef4444" />
        </div>
        <span className="font-bold text-3xl">R$ 1.021,00</span>
      </article>
      <article className={total}>
        <div className="flex justify-between items-center">
          <span className="font-bold">Total</span>
          <DollarSign size={32} color="#fff" />
        </div>
        <span className="font-bold text-3xl">R$ 13.569,00</span>
      </article>
    </section>
  )
}

import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
export function Header() {
  return (
    <header className="w-screen h-[12.25rem] bg-header-mcn p-6">
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
          <span className="text-2xl text-title-mcn font-bold">
            Dezembro_2023
          </span>
        </div>
        <button
          type="button"
          className="py-3 px-6 rounded-md text-xl font-bold bg-green-500 hover:bg-green-800 hover:transition-all hover:duration-300 active:scale-105"
        >
          Nova Transação
        </button>
      </div>
    </header>
  )
}

import { FormEvent, useState } from 'react'

export function Search() {
  const [search, setSearch] = useState('')
  function handleSearch(e: FormEvent) {
    e.preventDefault()

    const inputElement = e.target as HTMLInputElement

    setSearch(inputElement.value)

    console.log(search)
  }
  return (
    <form className="w-full max-w-[1120px] my-0 mx-auto px-6 py-0 mt-12">
      <input
        type="text"
        placeholder="Busque uma transação"
        className="w-full h-14 p-4 border-none rounded-md placeholder:text-label-mcn bg-input-mcn shadow shadow-black outline-green-500"
        onChange={handleSearch}
      />
    </form>
  )
}

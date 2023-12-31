function getCurrentMonthAndYearName() {
  const currentDate = new Date()

  const nameCurrentMonth = `${currentDate.toLocaleDateString('pt-BR', {
    month: 'long',
  })}_${currentDate.getFullYear()}`

  return nameCurrentMonth
}

function formatPrice(price: number): string {
  const formatPrice = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatPrice.format(price)
}

function formatDate() {
  const newData = new Date()

  const dataFormatter = new Intl.DateTimeFormat('pt-BR')

  return dataFormatter.format(newData)
}

export function utils() {
  return { getCurrentMonthAndYearName, formatPrice, formatDate }
}

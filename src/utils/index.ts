function getCurrentMonthAndYearName() {
  const currentDate = new Date()

  const nameCurrentMonth = `${currentDate.toLocaleDateString('pt-BR', {
    month: 'long',
  })}_${currentDate.getFullYear()}`

  return nameCurrentMonth
}

export function utils() {
  return { getCurrentMonthAndYearName }
}

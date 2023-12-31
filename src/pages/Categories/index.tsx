import { FormCreateCategory } from '../../components/FormCreateCategory'
import { ListCategories } from '../../components/ListCategories'

export function Categories() {
  return (
    <section className="max-w-full">
      <FormCreateCategory />
      <ListCategories />
    </section>
  )
}

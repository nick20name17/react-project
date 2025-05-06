import { CategoryCard } from './category-card'
import { Category } from '@/api/categories/categories-types'

interface CategoriesListProps {
  categories: Category[]
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  )
}

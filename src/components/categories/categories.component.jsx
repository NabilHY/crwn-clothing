import categoriesData from './category-data';
import Category from './category.component';
import './styles/categories.styles.scss';

const Categories = () => {
    return (
    <div className="categories-container">
        {categoriesData.map((category) => (
            <Category category={category} />
        ))}
    </div>
    )
}

export default Categories;
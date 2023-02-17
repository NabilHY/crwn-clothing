import categoriesData from './category-data';
import CategoryItem from './category.component.jsx';
import './styles/categories.styles.scss';

const Categories = () => {
    return (
    <div className="categories-container">
        {categoriesData.map((category) => (
            <CategoryItem category={category} key={category.id} />
        ))}
    </div>
    )
}

export default Categories;
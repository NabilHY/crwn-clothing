import './styles/category.styles.scss';

const Category = ({ id, url, title }) => {
    return (
        <div className='category-container' key={id}>
            <div
                className='background-image'
                style={{
                backgroundImage: `url${url}`
                }}
            />
            <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
            </div>
        </div>
    );
}

export default Category;
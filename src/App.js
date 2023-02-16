import './App.css';

const App = () => {
  const categories = [
    {
      title: 'Hats',
      id: 1,
    },
    {
      title: 'Sneakers',
      id: 2,
    },
    {
      title: 'Jackets',
      id: 3,
    },
    {
      title: 'Men',
      id: 4,
    },
    {
      title: 'Women',
      id: 5,
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
      <div className="category-container">
        <div className="background-image" />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
      })}
    </div>
  );
}

export default App;

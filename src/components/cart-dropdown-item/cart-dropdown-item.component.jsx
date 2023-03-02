export const CartDropdownItem = ({item}) => {
    const { imageUrl, name, price } = item;
    return (
        <div className='dropdown-item-container'>
            <img src={imageUrl} alt="url" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}
import './cart-dropdown-item.styles.scss';

export const CartDropdownItem = ({ item }) => {
    const { name, price, quantity, imageUrl } = item;
    return (
        <div className='dropdown-item-container'>
            <img src={imageUrl} alt={name} />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price} </span>
            </div>
        </div>
    )
}
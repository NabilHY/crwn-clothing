export const CartDropdownItem = ({item}) => {
    const { imgUrl, name, price } = item;
    return (
        <div className='dropdown-item-container'>
            <img src={imgUrl} alt="url" />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}
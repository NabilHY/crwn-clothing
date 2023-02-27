export const  FormInput = ({label, ...otherProps}) => {
  return (
    <div className='group'>
      <label> {label}</label>
      <input {...otherProps} />
    </div>
  )
}

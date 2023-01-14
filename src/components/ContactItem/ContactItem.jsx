export const ContactItem = ({id, name, number, handleDelete}) => {
    return (
        <li>{name}: {number}
        <button 
        type="button"
        onClick={()=> {handleDelete(id)}}
        >Delete</button>
        </li>
        
    )
}
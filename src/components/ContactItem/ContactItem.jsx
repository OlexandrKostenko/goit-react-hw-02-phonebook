import PropTypes from 'prop-types';
import { Item, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({id, name, number, handleDelete}) => {
    return (
        <Item>{name}: {number}
        <DeleteButton 
        type="button"
        onClick={()=> {handleDelete(id)}}
        >Delete</DeleteButton>
        </Item>
        
    )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
};
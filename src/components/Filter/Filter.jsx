import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import { Input } from "components/Form/Form.styled";

export const Filter = ({value, onChange}) => {
    return(
        <label htmlFor="" id={nanoid()}>
          <p>Find contacts by name</p>
          <Input type="text" value={value} onChange={onChange}/>
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
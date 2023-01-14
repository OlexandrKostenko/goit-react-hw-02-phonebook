import { nanoid } from "nanoid";

export const Filter = ({value, onChange}) => {
    return(
        <label htmlFor="" id={nanoid()}>
          <p>Find contacts by name</p>
          <input type="text" value={value} onChange={onChange}/>
        </label>
    );
};
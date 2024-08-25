import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "../../redux/filters/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

import css from "./SearchBox.module.css";

// { inputName, setInputName }
function SearchBox() {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={(event) => dispatch(setFilterValue(event.target.value))}
      />
    </>
  );
}

export default SearchBox;

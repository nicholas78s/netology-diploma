import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setQueryParams } from '../redux/slices/queryParamsSlice';
import { useAppDispatch } from '../redux/hooks';

const SearchExpander = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSearch('');
    setIsVisible(false);
  }, [location]);

  const handlerSearchClick = () => {
    if (search.trim()) {
      navigate('/catalog.html?q=' + encodeURIComponent(search || ''));
      dispatch(setQueryParams({ searchTerm: search }));
    } else {
      setIsVisible(false);
    }
  };

  const handlerShowClick = () => {
    setIsVisible((prev) => !prev);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerSearchClick();
  };

  return (
    <>
      {!isVisible && (
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={handlerShowClick}
        ></div>
      )}
      {isVisible && (
        <form
          data-id="search-form"
          className={
            'header-controls-search-form form-inline' +
            (isVisible ? '' : ' invisible')
          }
          onSubmit={submitHandler}
        >
          <input
            className="form-control"
            placeholder="Поиск"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            autoFocus
          />
          <div
            data-id="search-expander"
            className="header-controls-pic header-controls-search"
            onClick={handlerSearchClick}
          ></div>
        </form>
      )}
    </>
  );
};

export default SearchExpander;

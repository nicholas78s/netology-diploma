import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { selectLoadButton } from '../redux/slices/loadButtonSlice';
import { useAppSelector } from '../redux/hooks';
import { Link } from 'react-router-dom';

interface IErrorMessageProps {
  error: FetchBaseQueryError | SerializedError | undefined;
  reload?: () => void;
}

const ErrorMessage = ({ error, reload }: IErrorMessageProps) => {
  const { isDisabled: isLoadButtonDisabled } = useAppSelector(selectLoadButton);

  if (isLoadButtonDisabled) {
    return null;
  }

  const reloadLink = reload ? <Link to="#" onClick={reload}>Обновить</Link> : null;

  return (
    <>
      <div>
        Ошибка:
        {error && 'status' in error ? ' ' + error.status : null}
        {error && 'error' in error ? ' ' + error.error : null}
      </div>
      {reloadLink}
    </>
  );  
};

export default ErrorMessage;

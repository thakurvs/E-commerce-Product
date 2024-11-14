import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../app/toastSlice';

const Toast = ({ message, type, duration = 3000 }) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      dispatch(removeToast());
    }, duration);

    return () => clearTimeout(timer);
  }, [dispatch, duration]);

  return (
    show && (
      <div
        className={`fixed bottom-4 right-4 bg-${type}-500 text-green-500 bg-white px-4 py-2 rounded-md shadow-md`}
      >
        {message}
      </div>
    )
  );
};

export default Toast;


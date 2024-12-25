import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeToast } from '../../app/toastSlice';

const Toast = ({
  message = 'Action completed!',
  type = 'success',
  duration = 3000,
  position = 'middle-right', // You can choose other positions: top-right, bottom-right, etc.
}) => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      dispatch(removeToast());
    }, duration);

    return () => clearTimeout(timer);
  }, [dispatch, duration]);

  // Define position classes dynamically
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'middle-right': 'top-1/2 right-4 transform -translate-y-1/2',
    'middle-center': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  };

  // Define type-based color classes
  const typeClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  return (
    show && (
      <div
        className={`fixed z-50 ${positionClasses[position]} px-4 py-2 rounded-md shadow-md transition-opacity duration-300 ${
          typeClasses[type]
        }`}
        role="alert"
        aria-live="assertive"
      >
        {message}
      </div>
    )
  );
};

export default Toast;

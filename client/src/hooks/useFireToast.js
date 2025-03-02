import { useDispatch } from 'react-redux';
import { showToastMessage } from '../redux/actions/toastActions';

const useFireToast = () => {
    const dispatch = useDispatch();
    /**
       * Display a toast message.
       * @param {string} message - The message to display.
       * @param {('successToast'|'errorToast'|'warningToast')} type - The type of the message. Can only be 'A', 'B', or 'C'.
       */
    const toast = (message, type) => {
        dispatch(showToastMessage(message, type));
    };
    return toast;
}

export default useFireToast
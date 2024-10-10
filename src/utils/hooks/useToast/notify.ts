import { toast } from 'react-toastify';
import { ToastType } from '@/utils/hooks/useToast/useToast.types';

const notify = (type: ToastType, message: string): void => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'info':
      toast.info(message);
      break;
    default:
      toast(message);
  }
};

export default notify;

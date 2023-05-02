import SignIn from '@/modules/auth/components/SignIn';
import LayoutModal from '../LayoutModal';

interface ILoginPorps {
  open: boolean;
  onClose: () => void;
  onSingIn: () => void;
}

function Login({ open, onClose, onSingIn }: ILoginPorps) {
  return (
    <LayoutModal open={open} onClose={onClose}>
      <SignIn onSingIn={onSingIn} />
    </LayoutModal>
  );
}

export default Login;

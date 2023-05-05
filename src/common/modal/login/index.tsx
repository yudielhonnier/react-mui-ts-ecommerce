import { useState } from 'react';
import SignIn from '@/modules/auth/components/SignIn';
import SignUp from '@/modules/auth/components/SignUp';
import LayoutModal from '../LayoutModal';
import { FlexBox, FlexColCenter, FlexRowCenter } from '@/common/flex-box';
import { Button, Typography, useTheme } from '@mui/material';
import { H4 } from '@/common/Typography';
import { tokens } from '@/theme';
import { ILoginPorps } from '@/types';

function Login({ open, onClose, onSingIn }: ILoginPorps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [singIn, setSingIn] = useState(true);
  return (
    <LayoutModal open={open} onClose={onClose}>
      <FlexRowCenter>
        <FlexColCenter>
          <Button onClick={() => setSingIn(false)}>
            <H4 fontWeight={`${singIn ? '100' : '600'} `} color={`${colors.primary[100]}`}>
              Register
            </H4>
          </Button>
          {!singIn && (
            <FlexBox width={20} height={4} backgroundColor={`${colors.redAccent[500]}`} />
          )}
        </FlexColCenter>
        <FlexColCenter>
          <Button onClick={() => setSingIn(true)}>
            <H4 fontWeight={`${singIn ? '600' : '100'} `} color={`${colors.primary[100]}`}>
              Sign in
            </H4>
          </Button>
          {singIn && <FlexBox width={20} height={4} backgroundColor={`${colors.redAccent[500]}`} />}
        </FlexColCenter>
      </FlexRowCenter>
      {singIn ? <SignIn onClose={onClose} /> : <SignUp></SignUp>}
    </LayoutModal>
  );
}

export default Login;

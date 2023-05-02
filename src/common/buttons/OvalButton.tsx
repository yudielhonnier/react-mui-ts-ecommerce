import { Button, styled, ButtonProps } from '@mui/material';

// ==================================================

interface IOvalButton {
  background?: IBackgroundObject;
  fontColor?: string;
}

interface IBackgroundObject {
  normal: string;
  hover: string;
}

const StyledButton = styled(Button)<IOvalButton>(({ theme, background, fontColor }) => ({
  backgroundColor: background?.normal,
  '&:hover': {
    color: fontColor ?? 'primary',
    backgroundColor: background?.hover,
  },
  borderRadius: '12px',
  height: '28px',
}));

interface IOvalButtonProps extends ButtonProps {
  children: React.ReactNode;
  background: IBackgroundObject;
  fontColor?: string;
}

const OvalButton = ({ children, background, fontColor, ...props }: IOvalButtonProps) => {
  return (
    <StyledButton variant='contained' {...props} background={background} fontColor={fontColor}>
      {children}
    </StyledButton>
  );
};

export default OvalButton;

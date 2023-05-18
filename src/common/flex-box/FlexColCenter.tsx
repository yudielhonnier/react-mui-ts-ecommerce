import { Box, BoxProps } from '@mui/material';

const FlexColCenter: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' {...props}>
    {children}
  </Box>
);

export default FlexColCenter;

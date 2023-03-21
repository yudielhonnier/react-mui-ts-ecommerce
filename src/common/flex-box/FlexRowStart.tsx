import { Box, BoxProps } from '@mui/material';

const FlexRowStart: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='flex-start' alignItems='center' {...props}>
    {children}
  </Box>
);

export default FlexRowStart;

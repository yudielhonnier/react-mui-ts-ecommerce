import { Box, BoxProps } from '@mui/material';

const FlexRowCenter: React.ElementType = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='center' alignItems='center' {...props}>
    {children}
  </Box>
);

export default FlexRowCenter;
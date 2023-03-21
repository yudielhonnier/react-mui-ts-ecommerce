import { Box, BoxProps } from '@mui/material';

const FlexBox: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' {...props}>
    {children}
  </Box>
);

export default FlexBox;

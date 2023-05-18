import { Box, BoxProps } from '@mui/material';
const FlexColBetween: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' flexDirection='column' justifyContent='space-between' {...props}>
    {children}
  </Box>
);

export default FlexColBetween;

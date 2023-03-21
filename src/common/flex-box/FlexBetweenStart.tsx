import { Box, BoxProps } from '@mui/material';
const FlexBetweenStart: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='space-between' alignItems='flex-start' {...props}>
    {children}
  </Box>
);

export default FlexBetweenStart;

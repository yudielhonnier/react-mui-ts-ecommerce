import { Box, BoxProps } from '@mui/material';
const FlexBetweenCenter: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='space-between' alignItems='center' {...props}>
    {children}
  </Box>
);

export default FlexBetweenCenter;

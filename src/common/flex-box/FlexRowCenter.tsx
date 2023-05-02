import { Box, BoxProps } from '@mui/material';

const FlexRowCenter: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='center' alignItems='center' {...props} gap={1}>
    {children}
  </Box>
);

export default FlexRowCenter;

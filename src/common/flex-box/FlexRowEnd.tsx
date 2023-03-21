import { Box, BoxProps } from '@mui/material';

const FlexRowEnd: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box display='flex' justifyContent='flex-end' alignItems='center' {...props}>
    {children}
  </Box>
);

export default FlexRowEnd;

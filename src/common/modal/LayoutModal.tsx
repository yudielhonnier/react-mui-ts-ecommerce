import { Box, Button, Dialog, DialogActions, DialogProps, DialogTitle } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

interface ILayoutModalProps extends DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: string;
  saveShow?: boolean;
  saveAction?: () => void;
  cancelShow?: boolean;
  cancelText?: string;
  cancelAction?: () => void;
  customShow?: boolean;
  customAction?: () => void;
  customText?: string;
  children?: React.ReactNode;
  color?: string;
}

function LayoutModal({
  open,
  onClose,
  title,
  saveShow,
  saveAction,
  cancelShow,
  cancelText = 'Cancel',
  cancelAction,
  customShow,
  customAction,
  customText,
  children,
  color,
  maxWidth = 'md',
}: ILayoutModalProps) {
  return (
    <Dialog sx={{ zIndex: 1600 }} onClose={onClose} open={open} maxWidth={maxWidth}>
      <DialogTitle color={color ? color : ''}>{title}</DialogTitle>
      <Box
        sx={{
          padding: '10px 20px',
        }}
      >
        {children}
      </Box>
      <DialogActions>
        {customShow ? (
          <Button variant='contained' color='primary' onClick={customAction}>
            {customText}
          </Button>
        ) : (
          <></>
        )}
        {saveShow ? (
          <Button variant='contained' color='primary' onClick={saveAction}>
            Save
          </Button>
        ) : (
          <></>
        )}
        {cancelShow ? (
          <Button variant='contained' color='primary' onClick={cancelAction}>
            {cancelText}
          </Button>
        ) : (
          <></>
        )}
      </DialogActions>
    </Dialog>
  );
}

LayoutModal.propTypes = {
  open: PropTypes.bool.isRequired,
  cancelShow: PropTypes.bool,
  cancelText: PropTypes.string,
  cancelAction: PropTypes.func,
  saveShow: PropTypes.bool,
  saveAction: PropTypes.func,
  customShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
  customText: PropTypes.string,
  customAction: PropTypes.func,
  onClose: PropTypes.func,
  maxWidth: PropTypes.string,
};

export default LayoutModal;

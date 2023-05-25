import { Category } from '@/types/models/Category';
import React from 'react';

const CustomIcon = ({ icon }: Category) => {
  return <img src={icon.image} alt={icon.name} />;
};

export default CustomIcon;

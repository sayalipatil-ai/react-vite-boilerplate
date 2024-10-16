import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';

interface CustomButtonProps {
  onClick: () => void;
  variant?: ButtonProps['variant']; 
  color?: ButtonProps['color'];     
  style?: React.CSSProperties;
  onMouseOver?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOut?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  variant = 'contained', 
  color = 'primary',    
  style,
  onMouseOver,
  onMouseOut,
  children,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

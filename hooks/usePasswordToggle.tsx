"use client";

import { useState } from "react";

interface PassowrdToggleProps {
  showPassword: boolean;
  handleTogglePassword: () => void;
}

const usePasswordToggle = (): PassowrdToggleProps => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return { showPassword, handleTogglePassword };
};

export default usePasswordToggle;

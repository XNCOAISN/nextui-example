"use client";

import { Button } from "@nextui-org/button";

export const SignIn = () => {
  const handleClick = () => {
    console.log("ログイン");
  };

  return (
    <Button
      color="primary"
      variant="flat"
      className="font-bold"
      onClick={handleClick}
    >
      ログイン
    </Button>
  );
};

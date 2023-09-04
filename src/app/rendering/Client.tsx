"use client";

export const Client = ({ children }: { children?: React.ReactNode }) => {
  console.log("client");

  return (
    <div>
      <div>client</div>
      <div>{children}</div>
    </div>
  );
};

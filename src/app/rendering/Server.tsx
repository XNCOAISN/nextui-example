export const Server = ({ children }: { children?: React.ReactNode }) => {
  console.log("server");

  return (
    <div>
      <div>server</div>
      <div>{children}</div>
    </div>
  );
};

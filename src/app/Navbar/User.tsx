import { NavbarUser } from "@/components/Navbar";

export type UserProps = {
  user: {
    profileImage: string;
  };
};

export const User = ({ user }: UserProps) => {
  return <NavbarUser src={user.profileImage} />;
};

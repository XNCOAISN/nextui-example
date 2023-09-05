import { Image } from "@nextui-org/image";

export type EventCardImageProps = {
  src: string;
};

export const EventCardImage = ({ src }: EventCardImageProps) => {
  return (
    <div className="w-40 md:w-48">
      <Image
        width="100%"
        classNames={{
          img: "object-cover aspect-video rounded-md",
          wrapper: "w-full",
        }}
        src={src}
        alt="eye-catch"
      />
    </div>
  );
};

import { Link } from "@/components/Link";
import { EventCard } from "@/features/EventCard";

const getAuthUser = async () => {
  return {
    id: "1",
  };
};

const getEvents = async () => {
  return [...Array(10)].map((_, i) => {
    return {
      id: i.toString(),
      name: "Event",
      profileImage: "https://picsum.photos/seed/picsum/300/200",
      startDate: "2023-04-05 06:07:08",
      locationName: "Location",
      category: {
        id: "1",
        name: "Category",
      },
      editors: [
        {
          id: (i % 3).toString(),
          name: "User",
          profileImage: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        },
      ],
    };
  });
};

const Home = async () => {
  const authUser = await getAuthUser();
  const events = await getEvents();

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 px-6 mt-8">
      <Link href="#">link</Link>
      {events.map((event) => {
        return (
          <EventCard
            key={event.id}
            event={event}
            organizer={event.editors[0]}
            category={event.category}
            isOrganizer={event.editors[0].id === authUser?.id}
          />
        );
      })}
    </div>
  );
};

export default Home;

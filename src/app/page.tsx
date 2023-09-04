const Home = () => {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4 px-6 mt-8">
      <h1 className="text-2xl font-bold mb-5">Lorem ipsum dolor sit ame</h1>
      {[...Array(10)].map((_, i) => (
        <div key={i} className="mb-5 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          voluptatum accusamus consequatur magnam, quo suscipit officiis, illum
          sequi quas laborum ea deleniti neque temporibus similique voluptates
          minima omnis laudantium consectetur?
        </div>
      ))}
    </div>
  );
};

export default Home;

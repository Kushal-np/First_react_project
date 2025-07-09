import CardComponents from "./CardComponent";

function ScalePictures() {
  const Details = [
    {
      id: 1,
      title: "Project Milestones",
      Details: "Track progress across custom flows for your team. Find the right balance for the user, privacy and security.",
    },
    {
      id: 2,
      title: "Team Views",
      Details: "Get a real-time overview of your team's work and stay aligned at every stage.",
    },
    {
      id: 3,
      title: "Advanced Search",
      Details: "Quickly locate tasks, files, and discussions with powerful filters and smart suggestions.",
    },
    {
      id: 4,
      title: "Strategic Initiatives",
      Details: "Define, track, and manage long-term goals with clarity and team alignment.",
    },
    {
      id: 5,
      title: "Flexible Workflows",
      Details: "Customize the way your team operates with modular workflows that adapt to your needs.",
    },
    {
      id: 6,
      title: "Unified Timeline",
      Details: "Visualize your entire project lifecycle in one connected, easy-to-follow timeline.",
    },
  ];

  return (
    <div className="min-h-screen w-full background_fourth_main px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Optional header section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fonty">
            Scale Your Vision
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Powerful features designed to elevate your team's productivity
          </p>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {Details.map((detail) => (
            <div key={detail.id} className="w-full">
              <CardComponents 
                id={detail.id}
                title={detail.title} 
                details={detail.Details} 
              />
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default ScalePictures;
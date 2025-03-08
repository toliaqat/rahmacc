import PageIntro from "@/components/PageIntro";

const MapPage = () => {
  return (
    <>
      <PageIntro eyebrow="Halal Map" title="Find Halal Restaurants and Groceries in Mill Creek & Seattle">
        <p>
          Discover halal dining options in Mill Creek, Seattle, and the surrounding areas with our community-curated map.
          This resource helps Muslims locate halal restaurants and food establishments throughout the greater Seattle region.
        </p>
      </PageIntro>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Our interactive map shows halal restaurants and food establishments in Mill Creek and the greater Seattle area that have been
            identified by community members. Browse the map to find halal options near you.
          </p>
          <p className="text-sm text-gray-500 italic">
            Note: This map is curated by the community, and Rahma is not responsible for any inaccuracies.
            Always verify halal status directly with the establishment when possible.
          </p>
        </div>

        <div className="">
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=107AIjb5qwoP6C1EMDsuHxouXj6nQfGJb&ehbc=2E312F" 
            width="100%" 
            height="600" 
            className="border-0"
            title="Mill Creek & Seattle Halal Map"
            aria-label="Google Map showing halal restaurants in Mill Creek and Seattle"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default MapPage;
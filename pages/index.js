const Spec = ({ label, value }) => (
  <div className="p-4 flex flex-col items-center">
    <span className="font-bold text-2xl text-blue-900">{value}</span>
    <span className="text-gray-600 text-sm">{label}</span>
  </div>
);

export default function Home({ data }) {
  return (
    <div className="bg-blue-900">
      {data.data.map(row => {
        return (
          <div className="grid grid-cols-3 gap-2 items-center border border-gray-300 p-4 m-4 bg-white rounded-lg">
            <div className="flex flex-col items-center row-span-2 col-span-2">
              <img src={row.Image} alt={`${row['Model Name']} Thumbnail}`} />
              <button
                className="border-4 border-blue-800 px-4 py-2 rounded-full font-bold cursor-not-allowed"
                type="button"
                disabled
              >
                Order Now
              </button>
            </div>
            <div>
              <h2 className="font-bold text-4xl text-blue-900">
                {row['Model Name']}
              </h2>
              <p>{row.Description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
              <Spec label="Range" value={row.Range} />
              <Spec label="Top Speed" value={row['Top Speed']} />
              <Spec label="Acceleration" value={row.Acceleration} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  // const res = await fetch('http://localhost:3000/api/sheet');
  const res = await fetch('https://spreadsheet-poc.vercel.app/api/sheet');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

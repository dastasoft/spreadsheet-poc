import Menu from '../components/Menu';

const Spec = ({ label, value }) => (
  <div className="p-4 flex flex-col items-center">
    <span className="font-bold text-2xl text-blue-800">{value}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default function Home({ data }) {
  return (
    <main className="bg-blue-900">
      <Menu
        items={data.data.map(row => ({
          label: row['Model Name'],
          value: row['Model ID']
        }))}
      />
      {data.data.map((row, index) => {
        return (
          <section
            id={row['Model ID']}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-center p-4 h-screen"
            style={{
              backgroundImage: `url("images/background${
                index % 2 === 0 ? '1' : '2'
              }.jpg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col items-center md:row-span-2 md:col-span-2">
              <img src={row.Image} alt={`${row['Model Name']} Thumbnail}`} />
            </div>
            <div
              className="lg:self-end bg-white p-5 m-2 bg-opacity-75"
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <h2 className="font-bold text-4xl text-blue-800">
                {row['Model Name']}
              </h2>
              <p style={{ fontSize: '2vmin' }}>{row.Description}</p>
            </div>
            <div className="lg:self-start flex flex-col items-center">
              <div
                className="grid grid-cols-3 gap-2 items-center bg-white bg-opacity-75 m-2"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <Spec label="Range" value={row.Range} />
                <Spec label="Top Speed" value={row['Top Speed']} />
                <Spec label="Acceleration" value={row.Acceleration} />
              </div>
              <button
                className="mt-6 border-4 border-blue-800 px-4 py-2 rounded-full font-bold cursor-not-allowed bg-white"
                type="button"
                disabled
              >
                Order Now
              </button>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/sheet'
      : 'https://spreadsheet-poc.vercel.app/api/sheet'
  );
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

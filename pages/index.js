export default function Home({ data }) {
  return (
    <div className="p-4 mx-auto flex items-center">
      <div
        className={`grid grid-cols-${data.headers.length} gap-1 border-blue-800 border`}
      >
        {data.headers.map(header => (
          <span className="font-bold text-lg border-blue-800 border  p-2">
            {header}
          </span>
        ))}
        {data.data.map(reg =>
          reg.map(cell => (
            <span className="p-2 border-blue-800 border">{cell}</span>
          ))
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('/api/sheet');
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}

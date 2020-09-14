export default function Home() {
  return <div className="p-4 mx-auto flex items-center">Hola</div>;
}

// export async function getStaticProps() {
//   const res = await fetch('https://spreadsheet-poc.vercel.app/api/sheet');
//   const data = await res.json();

//   return {
//     props: {
//       data
//     }
//   };
// }

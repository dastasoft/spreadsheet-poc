const onScroll = section => {
  const pageSection = document.getElementById(section);
  if (pageSection) {
    pageSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

export default function Menu({ items }) {
  return (
    <nav
      className="grid grid-flow-col p-4 bg-white border-b-2 border-gray-300 fixed w-screen bg-opacity-75"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      {items.map(item => (
        <button
          type="button"
          onClick={() => onScroll(item.value)}
          className="font-bold cursor-pointer tracking-wider outline-none focus:outline-none text-xs md:text-lg"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function SectionTitles({ firstWord, secondWord }) {
  return (
    <div className="flex items-center  justify-center bg-latest-bg px-5 py-4 shadow-latest">
      <h2 className="text-2xl font-bold text-white">
        {firstWord} <span className="text-yellow-600">{secondWord}</span>
      </h2>
    </div>
  );
}

export default SectionTitles;

function NewsContent({ tag, image, alt, children }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <div className="bg-news-tag-color flex h-7 max-w-[70px] -skew-x-6 items-center items-center px-4 py-0.5">
          <span className="flex w-full items-center justify-center text-xs font-bold text-yellow-600">
            {tag}
          </span>
        </div>
        <p className="text-sm font-semibold text-white">{children}</p>
      </div>
      <img
        src={image}
        alt={alt}
        className="ml-5 h-20 min-w-[100px] max-w-[100px] self-end rounded-md object-cover object-top "
      />
    </div>
  );
}

export default NewsContent;

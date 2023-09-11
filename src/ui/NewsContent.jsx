function NewsContent({ tag, image, alt, children }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex h-7 max-w-[70px] -skew-x-6 items-center bg-news-tag-color px-4 py-0.5 md:max-w-[90px]">
          <span className="flex w-full items-center justify-center text-xs font-bold text-yellow-600 md:text-sm">
            {tag}
          </span>
        </div>
        <p className="text-sm font-semibold text-white md:text-base">
          {children}
        </p>
      </div>
      <img
        src={image}
        alt={alt}
        className="ml-5 h-20 min-w-[100px] max-w-[100px] self-end rounded-md object-cover object-top md:ml-8"
      />
    </div>
  );
}

export default NewsContent;

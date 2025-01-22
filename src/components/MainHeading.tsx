function MainHeading({ title, subTitle }: { title: string; subTitle: string }) {
  return (
    <>
      <span className="font-semibold uppercase leading-4 text-slate-800">
        {subTitle}
      </span>
      <h2 className="text-4xl font-bold italic text-    ">{title}</h2>
    </>
  );
}

export default MainHeading;

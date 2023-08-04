interface Iprops {
  title: string;
  description: string;
}
export const PageIntro = ({ description, title }: Iprops) => {
  return (
    <div className="mb-3">
      <h2 className="font-bold text-lg pb-1">{title}</h2>
      <p className="text-accent text-sm">{description}</p>
    </div>
  );
};

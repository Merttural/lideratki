export function ScarfStripe() {
  const bands = ["bg-navy", "bg-white", "bg-scarlet", "bg-navy", "bg-white", "bg-scarlet"];
  return (
    <div className="flex h-2" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span key={index} className={`flex-1 ${bands[index % bands.length]}`} />
      ))}
    </div>
  );
}

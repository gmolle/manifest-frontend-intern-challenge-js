import Button from "./Button/Button";

export default function ButtonGrid() {
  const variants = ["primary", "secondary", "text"];

  return (
    <div className="space-y-6 p-6 bg-white text-black">
      {variants.map((variant) => (
        <div key={variant}>
          <h2 className="text-lg font-semibold capitalize mb-2">
            {variant} button
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <Button variant={variant}>Default</Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
            <Button variant={variant}>Clicked</Button>
            <div className="bg-black p-2 rounded">
              <Button variant={variant} inverted>
                Inverted
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

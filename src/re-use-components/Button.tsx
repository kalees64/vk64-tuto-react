const Button = (probs: ButtonProbs) => {
  const colors = {
    red: {
      base: "bg-red-500",
      hover: "hover:bg-red-600",
      active: "active:bg-red-700",
    },
    green: {
      base: "bg-green-500",
      hover: "hover:bg-green-600",
      active: "active:bg-green-700",
    },
    blue: {
      base: "bg-blue-500",
      hover: "hover:bg-blue-600",
      active: "active:bg-blue-700",
    },
  };

  const color: Color = colors[probs.color];

  return (
    <button
      className={`px-5 py-2 rounded-lg ${color.base} text-white font-bold cursor-pointer hover:${color.hover} active:${color.active}`}
      onClick={() => {
        probs.onBtnClick();
      }}
    >
      {probs.label}
    </button>
  );
};

export default Button;

interface ButtonProbs {
  label: string;
  color: "red" | "green" | "blue";
  onBtnClick: () => void;
}

interface Color {
  base: string;
  hover: string;
  active: string;
}

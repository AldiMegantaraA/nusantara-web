interface Type {
  type: string;
}

const ImageCustom = ({ type }: Type) => {
  return (
    <div
      className={`${
        type === "re"
          ? "background-re-container"
          : type === "mercy"
          ? "background-mercy-container"
          : "background-jeep-container"
      }`}
    />
  );
};

export default ImageCustom;

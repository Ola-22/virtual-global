export const NumberFormat = (value) =>
  new Intl.NumberFormat("en-IN", {
    currency: "INR",
  }).format(value);

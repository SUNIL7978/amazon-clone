

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  }).format(price/81.2)
}

export default FormatPrice

const real = 1;
const dolar = 0.2;
const euro = 0.19;
const libra = 0.16;

function Coin() {
  //if input 1 === real && input 2 === dolar ? return 0.2*real
  //if input 1 ===
  return (
    <>
      <Converter onCoinChange={coinConverter} />
    </>
  );
}

export default Coin;

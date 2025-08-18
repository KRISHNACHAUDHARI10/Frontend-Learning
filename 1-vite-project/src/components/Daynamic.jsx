export function Daynamic() {
  const name = "Krishna";
  const marks = [95, 85, 85, 85, 85, 76];

  const calculatemark = () => {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum / marks.length;
  };
  

  return (
    <p>
      {name} got percentage: {calculatemark()}
    </p>
  );
}

function DisplayOutcome({ number, factorial }) {
  return (
    <>
      <p>
        We berekenen de faculteit van {number}.
      </p>
      <p>
        De uitkomst is: {factorial}
      </p>
    </>
  );
}

export default DisplayOutcome;

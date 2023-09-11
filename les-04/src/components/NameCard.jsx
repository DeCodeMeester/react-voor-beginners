import './NameCard.css';

function NameCard({ details = {}, name = 'VUL NAAM IN', job = 'VUL JOB IN' }) {
  return (
    <section className="NameCard">
      <h2>{name}</h2>
      <p>
        Ik ben een {job}
      </p>
      {typeof details === 'object' && (
        <table>
          <tbody>
            {Object.entries(details).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default NameCard;

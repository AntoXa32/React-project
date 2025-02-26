import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.container}>
      <table className={css.centeredTable}>
        <thead>
          <tr>
            <th className={css.tables}>Type</th>
            <th className={css.tables}>Amount</th>
            <th className={css.tables}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
            return (
              <tr className={css.background} key={item.id}>
                <td className={css.table}>{item.type}</td>
                <td className={css.table}>{item.amount}</td>
                <td className={css.table}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

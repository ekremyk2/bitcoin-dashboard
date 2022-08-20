import React from "react";
import Counter from "./components/counter/counter.comp";
import PriceTable from "./components/price-table/price-table.comp";

function App() {
  return (
    <div>
      <div>Bitcoin-Dashboard-App</div>
      <section>
        <Counter />
      </section>
      <section>
        <PriceTable />
      </section>
    </div>
  );
}

export default App;

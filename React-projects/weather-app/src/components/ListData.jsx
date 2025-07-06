import Data from "./Data";

export default function ListData({ cityDatas, color }) {
    return (
      <div className="container">
        {cityDatas.map((data, index) => (
          <Data data={data} key={index} />
        ))}
      </div>
    );
  }
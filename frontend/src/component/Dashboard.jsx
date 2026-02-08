import React, { useEffect, useRef, useState, memo } from "react";
import { FixedSizeList as List } from "react-window";


const ROW_HEIGHT = 48;
const LIST_HEIGHT = 500;
const MAX_RECORDS = 8000;

const Row = memo(({ index, style, data }) => {
  const record = data[index];
  if (!record) return null;

  return (
    <div
      style={style}
      className="grid grid-cols-3 px-4 items-center text-sm border-b border-gray-100"
    >
      <span className="font-medium">{record.id}</span>
      <span className="text-gray-500">{record.timestamp}</span>
      <span className="text-blue-600 font-semibold">{record.value}</span>
    </div>
  );
});

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const counterRef = useRef(1);


  useEffect(() => {
    const interval = setInterval(() => {
      const newRecord = {
        id: counterRef.current++,
        timestamp: new Date().toLocaleTimeString(),
        value: (Math.random() * 100).toFixed(2),
      };

      setRecords((prev) => {
        const next = [...prev, newRecord];
        return next.length > MAX_RECORDS
          ? next.slice(-MAX_RECORDS)
          : next;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">
        High-Frequency Data Monitoring Dashboard
      </h1>

    
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Total Records</p>
          <p className="text-2xl font-bold">{records.length}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Update Rate</p>
          <p className="text-2xl font-bold">200 ms</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Status</p>
          <p className="text-2xl font-bold text-green-600">Live</p>
        </div>
      </div>

    
      <div className="bg-white rounded shadow">
        <div className="grid grid-cols-3 px-4 py-3 bg-gray-600 font-semibold border-b">
          <span>ID</span>
          <span>Timestamp</span>
          <span>Value</span>
        </div>

        <List
          height={LIST_HEIGHT}
          itemCount={records.length}
          itemSize={ROW_HEIGHT}
          width="100%"
          itemData={records}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default Dashboard;


import React from "react";


const newsItems = [
  {
    location: "Mont-de-Marsan - 40",
    time: "07/31 at 6:24 p.m.",
    title: "Landes: when the police want to recruit locally",
  },
  {
    location: "Tonnay-Charente - 17",
    time: "07/30 at 12:18",
    title: "Tonnay-Charente: the Timac Agro factory is playing for time to clean up its site",
  },
  {
    location: "Agen - 47",
    time: "07/31 at 11:45",
    title: 'Untouchables of the South-West: why do we say "Agen itself"?',
  },
  {
    location: "Bordeaux - 33",
    time: "07/31 at 4:01 p.m.",
    title: "SunSka. Mc Solaar, Chinese Man and Flavia Coelho surround big names in reggae",
  },
  {
    location: "Duras - 47",
    time: "07/31 at 9:53 p.m.",
    title: "Lot-et-Garonne: two men burned in the face at their workplace",
  },
];

export default function RegionalNews() {
  return (
    <div className="p-3 bg-white shadow-sm rounded">
      <h5 className="fw-bold fs-4 mb-3">Regional news feed</h5>
      {newsItems.map((item, idx) => (
        <div key={idx} className="mb-3 border-bottom pb-2">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="d-flex align-items-center fs-5">
              <span className="dot  me-2"></span>
              <strong>{item.location}</strong>
            </div>
            <small className="text-muted">{item.time}</small>
          </div>
          <p className="mb-0 text-dark" style={{ lineHeight: "1.4" }}>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

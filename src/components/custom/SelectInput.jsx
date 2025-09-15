import React from "react";

const SelectInput = ({ label, value, onChange, options, placeholder }) => (
  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:border-amber-400 transition-all duration-300">
    <label className="block mb-2 font-semibold">{label}</label>
    <select
      className="w-full border-none rounded p-2 focus:ring-2 focus:ring-amber-400 outline-none "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option
          className="text-black"
          key={opt.name}
          value={opt.value || opt.name}
        >
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;

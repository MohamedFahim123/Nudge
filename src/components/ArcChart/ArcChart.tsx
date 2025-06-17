"use client";
import { motion } from "framer-motion";
import React from "react";

type ArcChartProps = {
  percent: number;
  color: string;
  label: string;
};

const ArcChart = ({ percent, color, label }: ArcChartProps) => {
  const radius = 50;
  const circumference = Math.PI * radius;
  const progress = (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg width="300" height="100" viewBox="0 0 140 80" className="mb-2">
        <path
          d="M 10 70 A 60 60 0 0 1 130 70"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="10"
        />
        <motion.path
          d="M 10 70 A 60 60 0 0 1 130 70"
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <span className={`text-3xl md:text-4xl font-bold`} style={{ color,marginTop: "-50px" }}>{percent}%</span>
      <p className="text-md text-center text-gray-700 mt-2 w-80">{label}</p>
    </div>
  );
};

export default React.memo(ArcChart);

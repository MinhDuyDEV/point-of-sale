import React, { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getCookie } from "cookies-next";
import axios from "axios";
import { motion } from "framer-motion";

const DataTableReportWeek = () => {
  const token = getCookie("token");
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        await axios
          .get("api/reports/this-week", {
            baseURL: "http://localhost:3000",
            headers: {
              "Content-Type": "Application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response: any) => {
            setData(response?.data?.orders);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [token]);
  if (!data) {
    return null;
  }
  console.log("🚀 ~ TotalRevenueToday ~ data:", data);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <DataTable
        columns={columns}
        data={data}
        searchKey="CustomerPhoneNumber"
      />
    </motion.div>
  );
};

export default DataTableReportWeek;

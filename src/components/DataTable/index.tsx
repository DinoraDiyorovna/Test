import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import FileIcon from "../../assets/file-icon.png";
import TrashFill from "../../assets/trashFill.png";

const columns = [
  { id: "level", label: "Уровень" },
  { id: "work", label: "Наименование работ" },
  { id: "salary", label: "Основная з/п" },
  { id: "equipment", label: "Оборудование" },
  { id: "expenses", label: "Накладные расходы" },
  { id: "profit", label: "Сметная прибыль" },
];

const rows = [
  {
    level: 1,
    work: "Пример работы",
    salary: "1000",
    equipment: "500",
    expenses: "200",
    profit: "300",
  },
];

const topRow = { work: "Cтроительные работы" };

const DataTable = () => (
  <div>
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "black", color: "white", marginBottom: 2 }}
    >
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ color: "white" }}>{topRow.work}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "black", color: "white" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id} sx={{ color: "white" }}>
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.id} sx={{ color: "white" }}>
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default DataTable;

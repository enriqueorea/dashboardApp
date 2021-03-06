import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Filter,
  Inject,
  ExcelExport,
  PdfExport,
  Edit,
  Sort,
  ContextMenu,
  Resize,
} from "@syncfusion/ej2-react-grids";

import { ordersData, ordersGrid, contextMenuItems } from "../data/dummy";
import { Header } from "../components";
const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Sort,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;

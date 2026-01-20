import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Layout from "@/components/layout";
import { DataTable } from "./data-table";
import { TransactionProviders } from "@/context/transactions";

export default function Report() {

  const breadcrumbItems = (
    <BreadcrumbItem>
      <BreadcrumbPage>Report</BreadcrumbPage>
    </BreadcrumbItem>
  );

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <TransactionProviders>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <DataTable />
        </div>
      </TransactionProviders>
    </Layout>
  )
}

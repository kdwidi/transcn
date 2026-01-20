import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Layout from "@/components/layout";
import { DataTable } from "./data-table";

export default function MasterUser() {

  const breadcrumbItems = (
    <BreadcrumbItem>
      <BreadcrumbPage>Master User</BreadcrumbPage>
    </BreadcrumbItem>
  );

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <DataTable />
      </div>
    </Layout>
  )
}

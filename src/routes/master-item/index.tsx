
import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";
import Layout from "@/components/layout";
import { DataTable } from "./data-table";
import { ItemProviders } from "@/context/items";

export default function MasterItem() {

  const breadcrumbItems = (
    <BreadcrumbItem>
      <BreadcrumbPage>Master Item</BreadcrumbPage>
    </BreadcrumbItem>
  );

  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <ItemProviders>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <DataTable />
        </div>
      </ItemProviders>
    </Layout>
  )
}

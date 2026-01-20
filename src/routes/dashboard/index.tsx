import Layout from "@/components/layout";
import { BreadcrumbItem, BreadcrumbPage } from "@/components/ui/breadcrumb";

export default function Dashboard() {

  const breadcrumbItems = (
    <BreadcrumbItem>
      <BreadcrumbPage>Dashboard</BreadcrumbPage>
    </BreadcrumbItem>
  );

  return (
    <Layout
      breadcrumbItems={breadcrumbItems}
    >
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-8 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </Layout>
  )
}

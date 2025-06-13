import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  // const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
    </div>
  );
}

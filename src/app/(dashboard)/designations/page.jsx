import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";

const columns = ["Designation"]
const records = [
  {designation: "Associate Professor"},
  {designation: "Assistant Professor"},
  {designation: "Lecturer"},
  {designation: "HoD"},
]

const actions = {
  actions: true,
  update: true,
  view: false,
  delete: true,
  all:  false,
}

export default function DesignationManagementPage() {
  return (
    <div className="container">
      <TitleHeader title="Designations Management" />

      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Designation" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <AddBtn title="Designation" />
        </div>
      </div>

      <Table columns={columns} records={records} actions={actions} />
      <Pagination />
    </div>
  );
}

import AddBtn from "@/components/common/AddBtn";
import BulkDelete from "@/components/common/BulkDelete";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import Table from "@/components/common/Table";
import TitleHeader from "@/components/common/TitleHeader";

const columns = ["Location"];
const records = [
  { location: "Islamabad Campus" },
  { location: "Lawrence Road Office" },
  { location: "Karachi Campus (I)" },
  { location: "Faisal Town Campus, Lahore" },
  { location: "Gujranwala Campus" },
  { location: "Faisalabad Campus" },
  { location: "Karachi Campus (II)" },
  { location: "Abbotabad Campus" },
  { location: "Hyderabad Campus" },
  { location: "Peshawar Campus" },
];
const actions = {
  actions: true,
  update: false,
  view: false,
  delete: true,
  all: false,
};

export default function LocationManagementPage() {
  return (
    <div className="container">
      <TitleHeader title="Locations Management" />

      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Location" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <AddBtn title="Location" />
        </div>
      </div>

      <Table columns={columns} records={records} actions={actions} />
      <Pagination />
    </div>
  );
}

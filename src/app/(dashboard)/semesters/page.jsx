import AddBtn from '@/components/common/AddBtn';
import BulkDelete from '@/components/common/BulkDelete';
import FormModal from '@/components/common/FormModal';
import Pagination from '@/components/common/Pagination';
import Searchbar from '@/components/common/Searchbar';
import Table from '@/components/common/Table';
import TitleHeader from '@/components/common/TitleHeader'

const columns = [
  "Semester",
  "Start Date",
  "End Date",
  "Active"
]
const records = [
  {semester: "Summer Semester 2024",  startDate: "2024-06-01", endDate: "2024-08-31", active: "Yes"},
  {semester: "Spring Semester 2024",  startDate: "2024-04-01", endDate: "2024-05-31", active: "No"},
  {semester: "Fall Semester 2023",  startDate: "2023-09-01", endDate: "2023-03-31", active: "No"},
  {semester: "Spring Semester 2023",  startDate: "2023-04-01", endDate: "2023-05-31", active: "No"},
  {semester: "Fall Semester 2022",  startDate: "2022-09-01", endDate: "2022-03-31", active: "No"},
  {semester: "Spring Semester 2022",  startDate: "2022-04-01", endDate: "2022-05-31", active: "No"},
  {semester: "Fall Semester 2021",  startDate: "2021-09-01", endDate: "2021-03-31", active: "No"},
  {semester: "Spring Semester 2021",  startDate: "2021-04-01", endDate: "2021-05-31", active: "No"},
  {semester: "Fall Semester 2020",  startDate: "2020-09-01", endDate: "2020-03-31", active: "No"},
  {semester: "Spring Semester 2020",  startDate: "2020-04-01", endDate: "2020-05-31", active: "No"},

]
const actions = {
  actions: "true",
  all: "true",
};

export default function SemesterManagementPage() {
  return (
    <div className="container">
      <TitleHeader title="Semesters Management" />

      <div className="tableTopNav">
        <div className="filtersGroup">
          <Searchbar label="Semester" />
        </div>

        <div className="actionsGroup">
          <BulkDelete />
          <FormModal title="Semester" type="create" table="semesters" />
        </div>
      </div>

      <Table columns={columns} records={records} actions={actions} table="semesters" />
      <Pagination />
    </div>
  );
}

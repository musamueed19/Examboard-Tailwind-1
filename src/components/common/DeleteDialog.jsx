import Btns from "./Btns";
import Form from "./Form";
import TitleHeader from "./TitleHeader";


{/* <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog"></div>; */ }

export default function DeleteDialog({ title, object }) {
  return (
    <Form>
      <TitleHeader title={`Delete ${title}`} />
      <form action="" className="flex flex-col gap-2">
        <h3>
          Are you sure you want to delete <span className="text-red-500 font-semibold">{object}</span>?
        </h3>
        <p>This will permanately delete this {title.toLowerCase()}</p>
        <div className="flex w-full justify-between px-8 mt-4">
          <Btns type="secondary" title="Cancel" />
          <Btns type="alert" title="Delete" />
        </div>
      </form>
    </Form>
  );
}

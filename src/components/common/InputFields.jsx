export default function InputFields({label, required = true, name, input = "text", value, placeholder, options}) {
  return (
    <div>
      {input !== "dropdown" ? (
        <div className="flex flex-col">
          <label htmlFor={name} className="font-medium text-[#344054]">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <input
            className="border-[1.6px] border-gray-300 px-[0.3rem] py-[0.4rem] rounded-md text-sm outline-none hover:border-gray-400/60"
            type={input}
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
          />
        </div>
      ) : (
        <div className="flex flex-col">
          <label htmlFor={name} className="font-medium text-[#344054]">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            value={value}
            name={name}
            id={name}
            className="border-[1.6px] border-gray-300 px-[0.3rem] py-1 rounded-md text-sm outline-none hover:border-gray-400/60"
          >
            {options.map((option, index) => (
              <option value={option.value} id={index} className="text-sm rounded-md">
                {option.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}


/*
Component:  InputFields

props => label, type, required, name, placeholder, value

return:
          div
          label
          input
*/          
import InputFields from "../common/InputFields";

export default function ChangePasswordForm() {
  return (
    <form className="flex flex-col gap-5 w-full px-6">
      <InputFields
        label="Current Password"
        name="currentPassword"
        input="password"
        placeholder="Enter current password"
      />
      <InputFields
        label="New Password"
        name="newPassword"
        input="password"
        placeholder="Enter new password"
      />
      <InputFields
        label="Confirm Password"
        name="confirmPassword"
        input="password"
        placeholder="Confirm new password"
      />
      <button
        type="submit"
        className="bg-[#226FFE] text-white font-bold rounded-sm py-1 mt-6"
      >
        Change Password
      </button>
    </form>
  );
}

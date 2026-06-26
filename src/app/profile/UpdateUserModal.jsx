"use client";
import { imageUpload } from "@/lib/actions/imageUpload";
import { profileUpdate } from "@/lib/actions/profile";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit, User } from "lucide-react";
import toast from "react-hot-toast";
import { email } from "zod";

export function UpdateUserProfileModal(user) {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const uploadedImage = await imageUpload(data.image);
    const image = uploadedImage.url;
    const email = user?.user.email;
    const allData = { ...data, email, image };
    const result = await profileUpdate(allData);
    if (result.modifiedCount > 0) {
      toast.success("Profile updated.");
      window.location.reload();
    } else if (result.matchedCount > 0) {
      toast.info("No changes were made.");
    } else {
      toast.error("User not found.");
    }
  };
  return (
    <Modal>
      <Button variant="secondary">
        <Edit /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <User className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full " name="name" type="text">
                    <Label>Name</Label>
                    <Input
                      defaultValue={user?.name || ""}
                      placeholder="Enter your updated name here"
                      className={"rounded-full border border-slate-500"}
                    />
                  </TextField>
                  <div className="w-full">
                    <Label isRequired>Image</Label>
                    <label
                      htmlFor="image-upload"
                      className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-slate-500 mt-2 rounded-full cursor-pointer text-gray-600  transition bg-white dark:bg-[#18181B]"
                    >
                      <span>Click here to upload your image</span>
                      <span className="text-xs opacity-60">Browse</span>
                    </label>

                    <input
                      id="image-upload"
                      name="image"
                      type="file"
                      className="hidden "
                    />
                  </div>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Update
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

{
  /* <form onSubmit={onSubmit} className="space-y-4">
  <Input
    name="name"
    defaultValue={user?.name}
    placeholder="Enter your name"
    className="rounded-full"
  />

  <input
    name="image"
    type="file"
    accept="image/*"
    className="border rounded-full p-2 w-50"
  />

  <div className="flex justify-end gap-2">
    <Button
      type="button"
      variant="secondary"
      onClick={close}
      onPress={() => setOpen(false)}
    >
      Cancel
    </Button>

    <Button type="submit">Update</Button>
  </div>
</form>; */
}

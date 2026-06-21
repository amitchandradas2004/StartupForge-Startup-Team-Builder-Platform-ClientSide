"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { imageUpload } from "@/lib/imageUpload";
import { Button, Input, Modal, Surface } from "@heroui/react";
import toast from "react-hot-toast";

export function UpdateUserProfileModal({ user }) {
  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const file = formData.get("image");

    let imageUrl = user?.image;

    if (file && file.size > 0) {
      const uploadedImage = await imageUpload(file);
      imageUrl = uploadedImage.url;
    }

    await authClient.updateUser({
      name,
      image: imageUrl,
    });
    toast.success("Profile updated successfully");
    window.location.reload();
    setOpen(false);
  };
  const close = () => {
    window.location.reload();
  };
  return (
    <>
      {/* OPEN BUTTON */}
      <Button onPress={() => setOpen(true)} variant="secondary">
        Update Profile
      </Button>

      {/* CONTROLLED MODAL */}
      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop />

        <Modal.Container placement="auto" className="mx-auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.Header>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface>
                <form onSubmit={onSubmit} className="space-y-4">
                  {/* NAME */}
                  <Input
                    name="name"
                    defaultValue={user?.name}
                    placeholder="Enter your name"
                    className="rounded-full"
                  />

                  {/* IMAGE */}
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
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal>
    </>
  );
}
// *************************

// "use client";
// import { authClient } from "@/lib/auth-client";
// import { imageUpload } from "@/lib/imageUpload";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// import { Edit, User } from "lucide-react";

// export function UpdateUserProfileModal({ user }) {
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;

//     const uploadedImage = await imageUpload(user?.image);
//     await authClient.updateUser({
//       name,
//       image: uploadedImage.url,
//     });
//   };
//   return (
//     <Modal>
//       <Button variant="secondary">
//         <Edit></Edit> Update Profile
//       </Button>
//       <Modal.Backdrop>
//         <Modal.Container placement="auto">
//           <Modal.Dialog className="sm:max-w-md">
//             <Modal.CloseTrigger />
//             <Modal.Header>
//               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                 <User className="size-5" />
//               </Modal.Icon>
//               <Modal.Heading>Update User</Modal.Heading>
//             </Modal.Header>
//             <Modal.Body className="p-6">
//               <Surface variant="default">
//                 <form onSubmit={onSubmit} className="flex flex-col gap-4">
//                   <TextField className="w-full " name="name" type="text">
//                     <Label>Name</Label>
//                     <Input
//                       placeholder="Enter your name"
//                       className={"rounded-full"}
//                     />
//                   </TextField>
//                   <div className="w-full">
//                     <Label isRequired>Image</Label>
//                     <label
//                       htmlFor="image-upload"
//                       className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-none rounded-full cursor-pointer text-gray-600  transition bg-white dark:bg-[#18181B]"
//                     >
//                       <span>Click here to upload your image</span>
//                       <span className="text-xs opacity-60">Browse</span>
//                     </label>

//                     <input
//                       id="image-upload"
//                       name="image"
//                       type="file"
//                       className="hidden"
//                     />
//                   </div>
//                   <Modal.Footer>
//                     <Button type="submit" slot="close" variant="secondary">
//                       Cancel
//                     </Button>
//                     <Button type="submit" slot="close">
//                       Update
//                     </Button>
//                   </Modal.Footer>
//                 </form>
//               </Surface>
//             </Modal.Body>
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
//   );
// }

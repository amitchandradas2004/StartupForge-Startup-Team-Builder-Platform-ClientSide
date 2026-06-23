"use client";

import { imageUpload } from "@/lib/actions/imageUpload";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { VscGitStashApply } from "react-icons/vsc";

export function CollaboratorProfileUpdateModal() {
  const [skillsInput, setSkillsInput] = useState("");
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const uploadedImage = await imageUpload(data.image);
    const image = uploadedImage.url;
    const email = user?.email;
    const skills = [
      ...new Set(
        skillsInput
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      ),
    ];

    const allData = {
      ...data,
      skills,
      image,
      email,
    };
    // console.log(allData, "all");

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    });

    const result = await res.json();

 
    if (result.modifiedCount > 0) {
      toast.success("Profile updated successfully");
      window.location.reload();
    }
  };
  return (
    <Modal>
      <Button className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white py-3 font-medium transition">
        Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <VscGitStashApply />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full "
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className={"bg-white dark:bg-[#27272A] rounded-full"}
                    />
                  </TextField>
                  <div>
                    <div className="w-full">
                      <Label>Image</Label>
                      <label
                        isRequired
                        htmlFor="image-upload"
                        className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-none rounded-full cursor-pointer text-gray-600  transition bg-white dark:bg-[#27272A]"
                      >
                        <span>Click here to upload your image</span>
                        <span className="text-xs opacity-60">Browse</span>
                      </label>

                      <input
                        id="image-upload"
                        name="image"
                        type="file"
                        className="hidden"
                      />
                    </div>
                  </div>
                  <TextField isRequired>
                    <Label>Required Skills (Comma-separated)</Label>

                    <Input
                      name="skills"
                      value={skillsInput}
                      onChange={(e) => setSkillsInput(e.target.value)}
                      placeholder="e.g. React, TypeScript, JavaScript..."
                      className="bg-white dark:bg-[#27272A] rounded-full"
                    />
                  </TextField>
                  {/* Bio */}
                  <TextField isRequired>
                    <Label>Bio</Label>
                    <TextArea
                      className="w-full min-h-24 rounded-xl"
                      name="bio"
                      placeholder="Enter your bio here..."
                      aria-label="Profile Skills Required"
                      variant="secondary"
                    />
                  </TextField>{" "}
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

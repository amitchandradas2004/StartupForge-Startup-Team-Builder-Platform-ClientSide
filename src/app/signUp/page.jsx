"use client";
import { authClient } from "@/lib/auth-client";
import { imageUpload } from "@/lib/imageUpload";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Label,
  ListBox,
  Select,
  InputGroup,
  TextField,
} from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsEyeSlash } from "react-icons/bs";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdImage } from "react-icons/md";
export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    // Upload image
    const uploadedImage = await imageUpload(user.image);

    // Signup
    const { data, error } = await authClient.signUp.email({
      ...user,
      image: uploadedImage.url,
    });
    console.log(data, "data", error, "error");
    if (data) {
      toast.success(
        `${user.name}, you have successfully created an account in StartUp Forge.`,
      );
      redirect("/");
    }
    if (data.error) {
      toast.error(`${error?.message}`);
    }
  };

  return (
    <div className="border border-slate-300  shadow-xl w-110 mx-auto my-20  p-5 rounded-2xl  bg-black/5 ">
      {" "}
      <Form
        onSubmit={onSubmit}
        className="flex flex-col gap-4   justify-center"
      >
        <Fieldset className="w-full">
          <Fieldset.Legend className="text-center font-bold text-2xl">
            Create your account
          </Fieldset.Legend>
          <Fieldset.Group>
            {/* name */}
            <TextField isRequired name="name">
              <Label>Name</Label>
              <InputGroup className="rounded-full overflow-hidden">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <FaUser size={12} />
                </InputGroup.Prefix>
                <InputGroup.Input placeholder="John Doe" className="bg-white" />
              </InputGroup>
              <FieldError />
            </TextField>

            {/* Email */}
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <InputGroup className="rounded-full overflow-hidden">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <FaEnvelope size={12} />
                </InputGroup.Prefix>
                <InputGroup.Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white"
                />
              </InputGroup>
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField name="password" type="password" isRequired>
              <Label>Password</Label>
              <InputGroup className="rounded-full overflow-hidden">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <FaLock size={12} />
                </InputGroup.Prefix>

                <InputGroup.Input
                  name="password"
                  type={isVisible ? "text" : "password"}
                  placeholder="Enter password"
                />

                <InputGroup.Suffix
                  className="pr-3 cursor-pointer text-gray-400"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <BsEyeSlash size={16} /> : <Eye size={16} />}
                </InputGroup.Suffix>
              </InputGroup>
            </TextField>

            {/* Image */}
            <TextField
              isRequired
              className="w-full"
              type="file"
              variant="secondary"
            >
              <Label>Image</Label>

              <InputGroup className="rounded-full overflow-hidden">
                <InputGroup.Prefix className="pl-3 text-gray-400">
                  <MdImage />
                </InputGroup.Prefix>

                <input
                  name="image"
                  type="file"
                  className="w-full bg-white border border-none py-2 px-3 text-muted cursor-pointer"
                />
              </InputGroup>
            </TextField>

            {/* Role */}
            <Select isRequired name="role" placeholder="Select one">
              <Label>Signup As</Label>

              <Select.Trigger className="rounded-full">
                <span className="text-gray-400 mr-2">👤</span>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover className="rounded-3xl">
                <ListBox>
                  <ListBox.Item id="founder" textValue="founder">
                    Founder
                    <ListBox.ItemIndicator />
                  </ListBox.Item>

                  <ListBox.Item id="collaborator" textValue="collaborator">
                    Collaborator
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </Fieldset.Group>

          <Button type="submit" className={"w-full bg-indigo-600"}>
            Signup
          </Button>
        </Fieldset>
        <span className="font-medium mx-auto mt-2">
          Already have an account?{" "}
          <Link href="/signin">
            <span className="text-red-600 ">Login</span>
          </Link>
        </span>
      </Form>
      <div className="flex items-center gap-2 text-xs text-gray-500 my-3">
        <div className="flex-1 h-px bg-gray-300" />
        OR CONTINUE WITH
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      <div>
        <Button className="w-full rounded-full border hover:bg-indigo-600">
          <FcGoogle size={20} />
          Continue with Google
        </Button>
      </div>
    </div>
  );
}

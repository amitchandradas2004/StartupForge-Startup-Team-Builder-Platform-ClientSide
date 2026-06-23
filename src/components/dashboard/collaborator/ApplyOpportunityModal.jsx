"use client";

import { submitApplication } from "@/lib/actions/startup";
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
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa6";
import { VscGitStashApply } from "react-icons/vsc";

export function ApplyOpportunityModal({ opportunity }) {
  const { role_title, _id } = opportunity;
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const applicantEmail = user?.email;
  const opportunityID = _id;
  const status = "pending";
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const modalData = Object.fromEntries(formData.entries());
    const applicationData = {
      ...modalData,
      applicantEmail,
      opportunityID,
      status,
      opportunityName: role_title,
    };
    const res = await submitApplication(applicationData);
    if (res.insertedId) {
      toast.success("Application submitted successfully");
      redirect("/dashboard/collaborator/applications");
    }
  };
  return (
    <Modal>
      <Button className="mt-8 w-full rounded-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 py-2 font-semibold text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-3 cursor-pointer">
        Apply Now
        <FaArrowRight />
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <VscGitStashApply />
              </Modal.Icon>
              <Modal.Heading>Apply for this Opportunity.</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="role_title"
                    type="text"
                    variant="secondary"
                    isDisabled
                    defaultValue={role_title}
                  >
                    <Label>Role Title</Label>
                    <Input />
                  </TextField>

                  <TextField
                    isRequired
                    className="w-full"
                    name="portfolio_link"
                    type="url"
                    variant="secondary"
                  >
                    <Label>Portfolio Link (URL Link Only)</Label>
                    <Input placeholder="Enter your portfolio link here" />
                  </TextField>

                  <TextField isRequired>
                    <Label>Motivation Message</Label>
                    <TextArea
                      name="motivation_message"
                      aria-label="Motivation Message"
                      className="h-20"
                      placeholder="Share your motivation message here..."
                    />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">
                      Apply
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

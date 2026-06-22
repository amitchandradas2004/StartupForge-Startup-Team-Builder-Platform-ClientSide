"use client";

import { Rocket } from "@gravity-ui/icons";
import {
  Button,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa6";
import { Date } from "./Date";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

export function UpdateOpportunityModal({ opportunity }) {
  const [roleTitle, setRoleTitle] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [workType, setWorkType] = useState("");
  const [commitment, setCommitment] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (!opportunity) return;

    setRoleTitle(opportunity.role_title || "");
    setSkillsInput((opportunity.skills || []).join(", "));

    // normalize values (CRITICAL FIX)
    setWorkType(opportunity.work_type?.toLowerCase().replace(/\s/g, "_") || "");
    setCommitment(
      opportunity.commitment_level?.toLowerCase().replace(/\s/g, "_") || "",
    );

    setDeadline(opportunity.deadline || "");
  }, [opportunity]);
  const _id = opportunity._id;
  const variant = "blur";
  const handleUpdateOpportunity = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const skills = [
      ...new Set(
        skillsInput
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      ),
    ];
    const opportunityData = { ...data, skills };


    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/opportunities/${_id}`,

      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(opportunityData),
      },
    );
    const resData = await res.json();
    if (!resData.modifiedCount) {
      toast.error("Update failed! Please try again.");
      return;
    }
    toast.success("Opportunity updated successfully");
    window.location.reload()
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Modal>
        <Button variant="secondary">Update</Button>
        <Modal.Backdrop variant={variant}>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[700px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <Rocket className="size-5" />
                </Modal.Icon>
                <Modal.Heading>
                Note: You have to give the previous data.
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form
                    onSubmit={handleUpdateOpportunity}
                    className="space-y-6"
                  >
                    <Fieldset.Group className="space-y-5">
                      {/* Role Title */}
                      <div>
                        <TextField
                          isRequired
                          name="role_title"
                          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
                        >
                          <Label className="md:w-32 shrink-0">Role Title</Label>

                          <InputGroup className="w-full">
                            <InputGroup.Prefix>
                              <FaUser />
                            </InputGroup.Prefix>

                            <InputGroup.Input
                              value={roleTitle}
                              onChange={(e) => setRoleTitle(e.target.value)}
                            />
                          </InputGroup>
                        </TextField>
                      </div>

                      {/* Required Skills */}
                      <div>
                        <TextField isRequired name="skills">
                          <Label>Required Skills (Comma-separated)</Label>

                          <TextArea
                            aria-label="Opportunity Skills Required"
                            className="min-h-24 w-full"
                            placeholder="e.g. React, TypeScript, JavaScript..."
                            value={skillsInput}
                            onChange={(e) => setSkillsInput(e.target.value)}
                          />
                        </TextField>
                      </div>

                      {/* Work Type */}
                      <div>
                        <Select
                          isRequired
                          selectedKeys={workType ? [workType] : []}
                          onSelectionChange={(val) => {
                            const value = Array.from(val)[0];
                            setWorkType(value);
                          }}
                        >
                          <Label>Work Type</Label>

                          <Select.Trigger className="rounded-full">
                            <Select.Value />
                          </Select.Trigger>

                          <Select.Popover className="rounded-3xl">
                            <ListBox>
                              <ListBox.Item id="remote" textValue="Remote">
                                Remote
                              </ListBox.Item>

                              <ListBox.Item id="hybrid" textValue="Hybrid">
                                Hybrid
                              </ListBox.Item>

                              <ListBox.Item id="on_site" textValue="On-Site">
                                On-site
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>
                    </Fieldset.Group>

                    {/* Commitment Level */}
                    <div>
                      <Select
                        isRequired
                        selectedKeys={commitment ? [commitment] : []}
                        onSelectionChange={(val) => {
                          const value = Array.from(val)[0];
                          setCommitment(value);
                        }}
                      >
                        <Label>Commitment Level</Label>

                        <Select.Trigger className="rounded-full">
                          <Select.Value />
                        </Select.Trigger>

                        <Select.Popover className="rounded-3xl">
                          <ListBox>
                            <ListBox.Item id="part_time" textValue="Part-time">
                              Part-time
                            </ListBox.Item>

                            <ListBox.Item id="full-time" textValue="Full-time">
                              Full-time
                            </ListBox.Item>

                            <ListBox.Item id="contract" textValue="Contract">
                              Contract
                            </ListBox.Item>

                            <ListBox.Item
                              id="internship"
                              textValue="Internship"
                            >
                              Internship
                            </ListBox.Item>

                            <ListBox.Item id="volunteer" textValue="Volunteer">
                              Volunteer
                            </ListBox.Item>

                            <ListBox.Item id="advisor" textValue="Advisor">
                              Advisor
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <div>
                      <Date value={deadline} onChange={setDeadline} />
                    </div>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Update Opportunity
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}

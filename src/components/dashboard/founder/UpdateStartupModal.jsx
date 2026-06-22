"use client";

import { imageUpload } from "@/lib/actions/imageUpload";
import { authClient } from "@/lib/auth-client";
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

export function UpdateStartupModal({ startup }) {
  const _id = startup._id;
  const variant = "blur";
  const handleUpdateStartup = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const UpdatedLogo = await imageUpload(data.logo);
    const updatedData = { ...data, logo: UpdatedLogo.url };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/startups/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      },
    );
    const resData = await res.json();
    if (!resData.modifiedCount) {
      toast.error("Update failed");
      return;
    }
    toast.success("Startup updated successfully");
    window.location.reload();
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
                  Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form onSubmit={handleUpdateStartup} className="space-y-6">
                    <Fieldset.Group className="space-y-5">
                      {/* Startup Name */}
                      <div>
                        <TextField
                          name="startUpName"
                          className="flex flex-col md:flex-row items-center"
                        >
                          <Label className="w-35">Startup Name</Label>

                          <InputGroup className="w-full">
                            <InputGroup.Prefix>
                              <FaUser />
                            </InputGroup.Prefix>

                            <InputGroup.Input placeholder="e.g. TechNova" />
                          </InputGroup>
                        </TextField>
                      </div>

                      {/* Logo Upload */}
                      <div
                        whileHover={{ scale: 1.01 }}
                        className="flex flex-col md:flex-row items-center gap-5"
                      >
                        <Label>Logo</Label>

                        <div className="h-10 w-full border-2 border-slate-200 rounded-2xl p-2 text-center transition">
                          <label
                            htmlFor="image-upload"
                            className="cursor-pointer block"
                          >
                            <p className="font-medium">
                              Click here to upload logo
                            </p>
                          </label>

                          <input
                            id="image-upload"
                            name="logo"
                            type="file"
                            className="hidden"
                          />
                        </div>
                      </div>

                      {/* Industry */}
                      <div>
                        <Select name="industry" placeholder="Select Industry">
                          <Label>Industry</Label>

                          <Select.Trigger className="rounded-full">
                            <Select.Value />
                          </Select.Trigger>

                          <Select.Popover className="rounded-3xl">
                            <ListBox>
                              <ListBox.Item
                                id="technology"
                                textValue="technology"
                              >
                                Technology
                              </ListBox.Item>
                              <ListBox.Item id="fintech" textValue="fintech">
                                Fintech
                              </ListBox.Item>
                              <ListBox.Item
                                id="healthtech"
                                textValue="healthtech"
                              >
                                HealthTech
                              </ListBox.Item>
                              <ListBox.Item
                                id="e-commerce"
                                textValue="e-commerce"
                              >
                                E-Commerce
                              </ListBox.Item>
                              <ListBox.Item id="ai/ml" textValue="ai/ml">
                                AI/ML
                              </ListBox.Item>
                              <ListBox.Item
                                id="green-tech"
                                textValue="green-tech"
                              >
                                Green Tech
                              </ListBox.Item>
                              <ListBox.Item id="other" textValue="other">
                                Other
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Funding Stage */}
                      <div>
                        <Select
                          name="funding_stage"
                          placeholder="Select Funding Stage"
                        >
                          <Label>Funding Stage</Label>

                          <Select.Trigger className="rounded-full">
                            <Select.Value />
                          </Select.Trigger>

                          <Select.Popover className="rounded-3xl">
                            <ListBox>
                              <ListBox.Item id="idea" textValue="idea">
                                Idea
                              </ListBox.Item>
                              <ListBox.Item id="pre-seed" textValue="pre-seed">
                                Pre-Seed
                              </ListBox.Item>
                              <ListBox.Item id="seed" textValue="seed">
                                Seed
                              </ListBox.Item>
                              <ListBox.Item id="series-a" textValue="series-a">
                                Series-A
                              </ListBox.Item>
                              <ListBox.Item id="series-b" textValue="series-b">
                                Series-B
                              </ListBox.Item>
                              <ListBox.Item id="series-c" textValue="series-c">
                                Series-C
                              </ListBox.Item>
                              <ListBox.Item id="growth" textValue="growth">
                                Growth
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* team size needed */}
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Team Size Needed
                        </label>

                        <Select
                          name="team_size_needed"
                          placeholder="Select Team Size"
                          className="w-full"
                          isRequired
                        >
                          <Select.Trigger className="rounded-full">
                            <Select.Value placeholder="Select team size" />
                          </Select.Trigger>

                          <Select.Popover className="rounded-3xl">
                            <ListBox>
                              <ListBox.Item id="1-2" textValue="1-2">
                                1 - 2 Members (Very Early Stage)
                              </ListBox.Item>

                              <ListBox.Item id="2-5" textValue="2-5">
                                2 - 5 Members (Small Team)
                              </ListBox.Item>

                              <ListBox.Item id="5-10" textValue="5-10">
                                5 - 10 Members (Growing Team)
                              </ListBox.Item>

                              <ListBox.Item id="10-20" textValue="10-20">
                                10 - 20 Members (Startup Scaling)
                              </ListBox.Item>

                              <ListBox.Item id="20-50" textValue="20-50">
                                20 - 50 Members (Mid-size Startup)
                              </ListBox.Item>

                              <ListBox.Item id="50-100" textValue="50-100">
                                50 - 100 Members (Large Startup Team)
                              </ListBox.Item>

                              <ListBox.Item id="100-plus" textValue="100-plus">
                                100+ Members (Enterprise Scale)
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>
                    </Fieldset.Group>

                    {/* Description */}
                    <div>
                      <Label>Description</Label>

                      <TextArea
                        name="description"
                        aria-label="Startup Description"
                        className="min-h-30 w-full"
                        placeholder="Tell people about your startup, mission, and goals..."
                      />
                    </div>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Update Startup
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

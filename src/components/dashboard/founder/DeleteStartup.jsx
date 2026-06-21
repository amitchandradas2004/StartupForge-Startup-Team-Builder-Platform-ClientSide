"use client";

import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import toast from "react-hot-toast";

export function DeleteStartup({ startup }) {
  const handleDeleteStartup = async (_id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/startups/${_id}`,
        {
          method: "DELETE",
        },
      );
      const data = await res.json();
      if (data.deletedCount) {
        toast.success("Startup deleted successfully");
        window.location.reload();
      } else {
        toast.error("Failed to delete startup");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <Button variant="danger">Delete Startup</Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[420px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>
                Permanently delete your startup?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. All your data, settings, and
                content will be permanently removed from our servers. The
                dramatic red backdrop emphasizes the severity and
                irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Startup
              </Button>
              <Button
                onClick={() => handleDeleteStartup(startup._id)}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Delete Forever
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

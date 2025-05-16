/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Task form dialog component for the app
 */

// Node modules
import { useState } from "react";
import { useFetcher, useLocation } from "react-router";
import { startOfToday } from "date-fns";

// components
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TaskForm from "@/components/Tasky-AI/TaskForm";

const TaskFormDialog = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const fetcher = useFetcher();

  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className='p-0 border-0 !rounded-xl'>
        <TaskForm
          defaultFormaData={{
            content: "",
            due_date:
              location.pathname === "/app/today" ? startOfToday() : null,
            project: null,
          }}
          mode='create'
          onCancel={() => setOpen(false)}
          onSubmit={(formData) => {
            fetcher.submit(JSON.stringify(formData), {
              action: "/app",
              method: "POST",
              encType: "application/json",
            });
            setOpen(false);
          }}
        />
        {/* Task form component */}
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;

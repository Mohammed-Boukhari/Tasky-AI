/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Task form dialog component for the app
 */

// components
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import TaskForm from "@/components/Tasky-AI/TaskForm";

const TaskFormDialog = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className='p-0 border-0 !rounded-xl'>
        <TaskForm /> {/* Task form component */}
      </DialogContent>
    </Dialog>
  );
};

export default TaskFormDialog;

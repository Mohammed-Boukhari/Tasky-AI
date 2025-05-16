/**
 * @copyright 2025 Neurobit
 * @license Apache-2.0
 * @description Task form component for the app
 */

// Node modules
import { useState, useEffect, useCallback } from "react";
import * as chrono from "chrono-node";

// Custom modules
import { formatCustomDate, getTaskDueDateColorClass, cn } from "@/lib/utils";

// components
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";

// assets
import {
  Calendar as CalendarIcon,
  X as XIcon,
  Inbox as InboxIcon,
  ChevronDown as ChevronDownIcon,
  Hash as HashIcon,
  SendHorizonal as SendHorizonalIcon,
} from "lucide-react";

// Types
import type { ClassValue } from "clsx";
import type { TaskForm } from "@/types/type.type";

type TaskFormProps = {
  defaultFormaData?: TaskForm;
  className?: ClassValue;
  mode?: "create" | "edit";
  onCancel?: () => void;
  onSubmit?: (formData: TaskForm) => void;
};

const DEFAULT_FORM_DATA: TaskForm = {
  content: "",
  due_date: null,
  project: null,
};

const TaskForm: React.FC<TaskFormProps> = ({
  defaultFormaData = DEFAULT_FORM_DATA,
  className,
  mode,
  onCancel,
  onSubmit,
}) => {
  const [taskContent, setTaskContent] = useState(defaultFormaData.content);
  const [dueDate, setDueDate] = useState(defaultFormaData.due_date);
  const [projectId, setProjectId] = useState(defaultFormaData.project);

  const [projectName, setProjectName] = useState<string>("");
  const [projectColorHex, setprojectColorHex] = useState<string>("");

  const [dueDateOpen, setDueDateOpen] = useState<boolean>(false);
  const [projectOpen, setProjectOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<TaskForm>(defaultFormaData);

  useEffect(() => {
    setFormData((prevFormaData) => ({
      ...prevFormaData,
      content: taskContent,
      due_date: dueDate,
      project: projectId,
    }));
  }, [taskContent, dueDate, projectId]);

  useEffect(() => {
    const chronoParsed = chrono.parse(taskContent);

    if (chronoParsed.length) {
      const lastDate = chronoParsed[chronoParsed.length - 1];
      setDueDate(lastDate.date());
    }
  }, [taskContent]);

  const handleSubmit = useCallback(() => {
    if (!taskContent) return;

    if (onSubmit) onSubmit(formData);

    setTaskContent("");
  }, [taskContent, onsubmit, formData]);

  return (
    <Card className='focus-within:border-foreground/30'>
      <CardContent className='p-2'>
        <Textarea
          className='!border-0 !ring-0 mb-2 p-1'
          placeholder='After finishing the project, Take a tour'
          autoFocus
          value={taskContent}
          onInput={(e) => setTaskContent(e.currentTarget.value)}
        />
        <div className='ring-1 ring-border rounded-md max-w-max'>
          <Popover
            open={dueDateOpen}
            onOpenChange={setDueDateOpen}
          >
            <PopoverTrigger asChild>
              <Button
                type='button'
                variant='ghost'
                size='sm'
                className={cn(getTaskDueDateColorClass(dueDate, false))}
              >
                <CalendarIcon />

                {dueDate ? formatCustomDate(dueDate) : "Due date"}
              </Button>
            </PopoverTrigger>

            <PopoverContent className='w-auto p-0'>
              <Calendar
                mode='single'
                disabled={{ before: new Date() }} // Disable past dates
                initialFocus
                onSelect={(selected) => {
                  setDueDate(selected || null);
                  setDueDateOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>

          {dueDate && (
            <>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='px-2 -sm-2'
                    aria-label='Remove sue date'
                    onClick={() => setDueDate(null)}
                  >
                    <XIcon /> {/* Clear */}
                  </Button>
                </TooltipTrigger>
                <TooltipContent
                  side='top'
                  className='w-auto'
                >
                  <p className='text-sm'>Remove due date</p>
                </TooltipContent>
              </Tooltip>
            </>
          )}
        </div>
      </CardContent>

      <Separator />

      <CardFooter className='items-center grid grid-cols-[minmax(0,1fr),max-content] gap-2 p-2'>
        <Popover
          open={projectOpen}
          onOpenChange={setProjectOpen}
          modal
        >
          <PopoverTrigger asChild>
            <Button
              variant='ghost'
              role="'combobox"
              aria-expanded={projectOpen}
              className='max-w-max'
            >
              <InboxIcon /> <span>Inbox</span> <ChevronDownIcon />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className='w-[240px] p-0 '
            align='start'
          >
            <Command>
              <CommandInput placeholder='Search project...' />

              <CommandList>
                <ScrollArea>
                  <CommandEmpty>No project found.</CommandEmpty>

                  <CommandGroup>
                    <CommandItem>
                      <HashIcon /> Project 1
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 2
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 3
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 4
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 5
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 6
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 7
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 8
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 9
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 10
                    </CommandItem>

                    <CommandItem>
                      <HashIcon /> Project 11
                    </CommandItem>
                  </CommandGroup>
                </ScrollArea>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className='flex items-center gap-2'>
          <Button
            variant='secondary'
            onClick={onCancel}
          >
            <span className='max-md:hidden'>Cancel</span>

            <XIcon className='md:hidden' />
          </Button>

          <Button
            disabled={!taskContent}
            onClick={handleSubmit}
          >
            <span className='max-md:hidden'>
              {mode === "create" ? "Add task" : "Save"}
            </span>

            <SendHorizonalIcon className='md:hidden' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TaskForm;

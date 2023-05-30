import React, { ReactNode, useEffect, useRef } from "react";
import { BarTask } from "../../types/bar-task";
import { Task } from "../../types/public-types";

export type TaskListProps = {
  headerHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  rowHeight: number;
  ganttHeight: number;
  scrollY: number;
  locale: string;
  tasks: Task[];
  taskListRef: React.RefObject<HTMLDivElement>;
  horizontalContainerClass?: string;
  selectedTask: BarTask | undefined;
  setSelectedTask: (task: string) => void;
  onExpanderClick: (task: Task) => void;
  taskListHeader: ReactNode;
  taskListTable: ReactNode;
};

export const TaskList: React.FC<TaskListProps> = ({
  // headerHeight,
  // fontFamily,
  // fontSize,
  rowWidth,
  // rowHeight,
  scrollY,
  // tasks,
  // selectedTask,
  // setSelectedTask,
  // onExpanderClick,
  // locale,
  ganttHeight,
  taskListRef,
  horizontalContainerClass,
  taskListHeader,
  taskListTable,
}) => {
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (horizontalContainerRef.current) {
      horizontalContainerRef.current.scrollTop = scrollY;
    }
  }, [scrollY]);

  return (
    <div ref={taskListRef} style={{ width: rowWidth, flex: "none" }}>
      {taskListHeader}
      <div
        ref={horizontalContainerRef}
        className={horizontalContainerClass}
        style={ganttHeight ? { height: ganttHeight } : {}}
      >
        {taskListTable}
      </div>
    </div>
  );
};

interface HabitProps {
  completed: number;
}

export function Habits(props: HabitProps) {
  return (
    <div className="flex items-center justify-center bg-zinc-900 w-10 h-10 text-white m-2 rounded text-center">
      {props.completed}
    </div>
  );
}

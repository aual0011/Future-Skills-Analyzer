import { Slider } from "@/components/ui/slider";

interface TimeHorizonSelectorProps {
  value: number;
  onChange: (value: number[]) => void;
}

export const TimeHorizonSelector = ({ value, onChange }: TimeHorizonSelectorProps) => {
  return (
    <div className="w-full max-w-xs space-y-2">
      <label className="text-sm font-medium">Time Horizon (Years)</label>
      <Slider
        defaultValue={[value]}
        max={5}
        min={1}
        step={1}
        onValueChange={onChange}
        className="w-full"
      />
      <div className="text-sm text-gray-500 text-center">{value} years into the future</div>
    </div>
  );
};
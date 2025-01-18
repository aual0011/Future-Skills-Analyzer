import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

interface SkillsChartProps {
  data: Array<{
    skill: string;
    demand: number;
  }>;
}

export const SkillsChart = ({ data }: SkillsChartProps) => {
  return (
    <Card className="p-6 w-full h-[400px]">
      <h3 className="text-lg font-semibold mb-4">Predicted Skill Demand</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
          <XAxis type="number" domain={[0, 100]} />
          <YAxis dataKey="skill" type="category" />
          <Tooltip />
          <Bar dataKey="demand" fill="#2C74B3" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
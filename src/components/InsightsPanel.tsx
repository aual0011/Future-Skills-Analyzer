import { Card } from "@/components/ui/card";

interface InsightsPanelProps {
  insights: string[];
}

export const InsightsPanel = ({ insights }: InsightsPanelProps) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Key Insights</h3>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-primary-600 mt-1">•</span>
            <span>{insight}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
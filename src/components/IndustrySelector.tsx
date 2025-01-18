import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const industries = [
  { id: "tech", name: "Technology" },
  { id: "finance", name: "Finance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "manufacturing", name: "Manufacturing" },
  { id: "retail", name: "Retail" },
];

interface IndustrySelectorProps {
  selectedIndustry: string;
  onSelectIndustry: (industry: string) => void;
}

export const IndustrySelector = ({ selectedIndustry, onSelectIndustry }: IndustrySelectorProps) => {
  return (
    <div className="w-full max-w-xs">
      <Select value={selectedIndustry} onValueChange={onSelectIndustry}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an industry" />
        </SelectTrigger>
        <SelectContent>
          {industries.map((industry) => (
            <SelectItem key={industry.id} value={industry.id}>
              {industry.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
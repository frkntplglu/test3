"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function TestStep2() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Testing Parameters</h2>
        <p className="text-muted-foreground mb-6">
          Select the fairness metrics and demographic attributes to test
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label>Testing Scope</Label>
          <RadioGroup defaultValue="comprehensive">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="basic" id="basic" />
              <Label htmlFor="basic">Basic Analysis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comprehensive" id="comprehensive" />
              <Label htmlFor="comprehensive">Comprehensive Analysis</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom Analysis</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Demographic Attributes</Label>
          <div className="grid gap-4">
            {[
              "Gender",
              "Age",
              "Race/Ethnicity",
              "Geographic Location",
              "Income Level",
              "Education Level",
            ].map((attribute) => (
              <div key={attribute} className="flex items-center space-x-2">
                <Checkbox id={attribute.toLowerCase()} />
                <Label htmlFor={attribute.toLowerCase()}>{attribute}</Label>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-4 bg-secondary/50">
          <p className="text-sm text-muted-foreground">
            Select attributes that are relevant to your model's context and potential bias concerns.
          </p>
        </Card>
      </div>
    </div>
  );
}
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function TestStep1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Model Information</h2>
        <p className="text-muted-foreground mb-6">
          Please provide basic information about your AI model
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="model-name">Model Name</Label>
          <Input id="model-name" placeholder="Enter your model name" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="model-type">Model Type</Label>
          <Input id="model-type" placeholder="e.g., Classification, NLP, Computer Vision" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Model Description</Label>
          <Textarea
            id="description"
            placeholder="Briefly describe your model's purpose and functionality"
            rows={4}
          />
        </div>

        <Card className="p-4 bg-secondary/50">
          <p className="text-sm text-muted-foreground">
            This information helps us tailor the fairness testing process to your specific model type and use case.
          </p>
        </Card>
      </div>
    </div>
  );
}
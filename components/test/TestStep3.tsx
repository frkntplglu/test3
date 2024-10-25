"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function TestStep3() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Data Upload</h2>
        <p className="text-muted-foreground mb-6">
          Upload your test dataset and model predictions
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6 border-dashed border-2">
          <div className="text-center">
            <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Test Dataset</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Drag and drop your dataset file here, or click to browse
            </p>
            <Button variant="secondary">Choose File</Button>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="data-format">Data Format</Label>
            <Input id="data-format" placeholder="e.g., CSV, JSON, JSONL" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="target-column">Target Column</Label>
            <Input id="target-column" placeholder="Name of the target variable" />
          </div>
        </div>

        <Card className="p-4 bg-secondary/50">
          <p className="text-sm text-muted-foreground">
            Ensure your dataset includes the demographic attributes selected in the previous step.
            We support CSV, JSON, and JSONL formats.
          </p>
        </Card>
      </div>
    </div>
  );
}
"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function TestStep4() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Test Configuration</h2>
        <p className="text-muted-foreground mb-6">
          Configure your fairness test settings and start the analysis
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Detailed Reporting</Label>
                <p className="text-sm text-muted-foreground">
                  Generate comprehensive reports with visualizations
                </p>
              </div>
              <Switch />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Statistical Significance</Label>
                <p className="text-sm text-muted-foreground">
                  Include statistical significance tests
                </p>
              </div>
              <Switch />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-base">Bias Mitigation</Label>
                <p className="text-sm text-muted-foreground">
                  Generate bias mitigation recommendations
                </p>
              </div>
              <Switch />
            </div>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold mb-4">Ready to Start Testing</h3>
          <p className="text-sm text-muted-foreground mb-6">
            All required information has been collected. Click the button below to begin the fairness analysis.
          </p>
          <Button className="w-full gap-2">
            <Play className="w-4 h-4" /> Start Fairness Analysis
          </Button>
        </Card>
      </div>
    </div>
  );
}
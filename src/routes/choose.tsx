import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ActivityShell } from "@/components/ActivityShell";

export const Route = createFileRoute("/choose")({
  component: Choose;
});

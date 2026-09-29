import z from "zod";

export const PROJECT_TYPE_MAP = {
  rre: "Residential Renovation / Extension",
  nbh: "New-Build Home",
  ppf: "Pre-Purchase Feasibility",
  wr: "Wellness / Retreat",
  ip: "International Project",
  ms: "Measured Survey",
  pa: "Property Advisory",
  oth: "Other"
} as const;

export const BUDGET_MAP = {
  b1: "$10k - $25k",
  b2: "$25k - $50k",
  b3: "$50k - $100k",
  b4: "$100k+"
} as const;

export const PROJECT_TYPES = Object.keys(PROJECT_TYPE_MAP) as Array<
  keyof typeof PROJECT_TYPE_MAP
>;
export const BUDGETS = Object.keys(BUDGET_MAP) as Array<
  keyof typeof BUDGET_MAP
>;

export const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  location: z.string().min(1, "Project location is required."),
  projectType: z.enum(PROJECT_TYPES as [string, ...string[]], {
    message: "Please select a valid project type."
  }),
  budget: z.enum(BUDGETS as [string, ...string[]], {
    message: "Please select a valid budget range."
  }),
  message: z.string().min(10, "Please provide a bit more detail.")
});

export type FormValues = z.infer<typeof formSchema>;

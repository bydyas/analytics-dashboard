import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"

export function SalesAlert() {
  return (
    <Alert className="w-full mb-6 border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>MOCKED SALES DATASET</AlertTitle>
      <AlertDescription>
        This mock dataset covers the last 12 months.
        Please select filters within this time range to see relevant results.
      </AlertDescription>
    </Alert>
  )
}

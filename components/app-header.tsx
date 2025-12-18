import { ChevronDown, Database, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AppHeaderProps {
  activeConnection?: string
}

export function AppHeader({ activeConnection }: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2 bg-transparent">
              <span className="text-sm font-medium">Acme Corp</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Acme Corp</DropdownMenuItem>
            <DropdownMenuItem>Beta Ventures</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>+ Add Workspace</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {activeConnection && (
          <div className="flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-1.5">
            <Database className="h-3.5 w-3.5 text-indigo-500" />
            <span className="text-xs font-medium text-foreground">{activeConnection}</span>
          </div>
        )}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Team Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}

"use client"

import { Database, Home, LayoutDashboard, Settings, Workflow } from "lucide-react"
import { cn } from "@/lib/utils"

interface AppSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "query", label: "Query", icon: Workflow },
    { id: "dashboards", label: "Dashboards", icon: LayoutDashboard },
    { id: "connections", label: "Connections", icon: Database },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
            <Database className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-sidebar-foreground">DiveSQL</div>
            <div className="text-[10px] text-sidebar-foreground/60">by DataDives</div>
          </div>
        </div>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={cn(
              "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              activeSection === item.id
                ? "bg-indigo-600 text-white"
                : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/50 p-3 text-xs text-sidebar-foreground/70">
          <div className="font-medium">Where Data Gets a Life!</div>
          <div className="mt-1 text-[10px]">Built in India 🇮🇳</div>
        </div>
      </div>
    </aside>
  )
}

"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { IntroSection } from "@/components/intro-section"
import { QueryWorkspace } from "@/components/query-workspace"
import { DashboardsSection } from "@/components/dashboards-section"
import { ConnectionsSection } from "@/components/connections-section"
import { SettingsSection } from "@/components/settings-section"

export default function DiveSQLPage() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [hasConnection, setHasConnection] = useState(false)
  const [activeConnection, setActiveConnection] = useState<string>("")

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="space-y-6">
            <IntroSection onConnect={() => setActiveSection("connections")} />
            {hasConnection && <QueryWorkspace />}
          </div>
        )
      case "query":
        return <QueryWorkspace />
      case "dashboards":
        return <DashboardsSection />
      case "connections":
        return (
          <ConnectionsSection
            onConnectionSaved={(name) => {
              setHasConnection(true)
              setActiveConnection(name)
              setActiveSection("home")
            }}
          />
        )
      case "settings":
        return <SettingsSection />
      default:
        return <IntroSection onConnect={() => setActiveSection("connections")} />
    }
  }

  return (
    <div className="flex h-screen bg-background dark">
      <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader activeConnection={activeConnection} />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-[1600px] p-6">{renderContent()}</div>
        </main>
      </div>
    </div>
  )
}

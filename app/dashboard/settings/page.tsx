import { User, Bell, Shield, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Settings Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-medium text-sm text-left">
            <User className="w-4 h-4" />
            Profile Settings
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-sm text-left">
            <Building className="w-4 h-4" />
            Organization
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-sm text-left">
            <Bell className="w-4 h-4" />
            Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors text-sm text-left">
            <Shield className="w-4 h-4" />
            Security
          </button>
        </aside>

        {/* Settings Content Area */}
        <div className="flex-1 space-y-8 bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Profile</h3>
              <p className="text-sm text-muted-foreground">This is how others will see you on the platform.</p>
            </div>
            <div className="h-px bg-border/50 w-full" />

            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-muted border flex items-center justify-center font-bold text-2xl">
                  A
                </div>
                <Button variant="outline">Change Avatar</Button>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Display Name</label>
                <input 
                  type="text" 
                  defaultValue="Admin User"
                  className="w-full max-w-md bg-background border border-input rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="admin@m.co"
                  disabled
                  className="w-full max-w-md bg-muted/50 border border-input rounded-lg px-4 py-2 text-sm text-muted-foreground cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground">To change your email, please contact support.</p>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Bio</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us a little bit about yourself"
                  className="w-full max-w-md bg-background border border-input rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <Button className="rounded-xl px-8">Save Changes</Button>
            <Button variant="ghost" className="rounded-xl">Cancel</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

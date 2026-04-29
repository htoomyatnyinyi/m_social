import { Users, Activity, CreditCard, Server } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back. Here is what's happening with your platform today.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm text-muted-foreground">Total Users</h3>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-3xl font-bold">14,285</div>
          <p className="text-xs text-green-500 font-medium mt-1">+12% from last month</p>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm text-muted-foreground">Active Sessions</h3>
            <Activity className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-3xl font-bold">3,102</div>
          <p className="text-xs text-green-500 font-medium mt-1">+4% from yesterday</p>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm text-muted-foreground">API Requests</h3>
            <Server className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-3xl font-bold">1.2M</div>
          <p className="text-xs text-muted-foreground mt-1">Over the last 24h</p>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-sm text-muted-foreground">Sponsorship</h3>
            <CreditCard className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-3xl font-bold">$4,250</div>
          <p className="text-xs text-green-500 font-medium mt-1">+2 new sponsors today</p>
        </div>
      </div>

      {/* Main Charts Area Mock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-background border border-border/50 rounded-2xl p-6 shadow-sm h-96 flex flex-col">
          <div className="mb-6">
            <h3 className="font-semibold text-lg">User Growth</h3>
            <p className="text-sm text-muted-foreground">Active user acquisition over the last 30 days.</p>
          </div>
          <div className="flex-1 rounded-xl bg-muted/10 border flex items-end justify-between p-4 gap-2">
            {[30, 45, 40, 50, 65, 55, 75, 80, 70, 90, 85, 100].map((h, i) => (
              <div key={i} className="w-full bg-primary/40 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm h-96 flex flex-col">
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Recent Activity</h3>
          </div>
          <div className="flex-1 overflow-auto space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-muted shrink-0 flex items-center justify-center">
                  <Users className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm">New beta tester registered</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

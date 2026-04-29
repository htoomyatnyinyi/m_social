import { BarChart3, LineChart, PieChart, Activity, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Deep dive into your platform's performance metrics.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            Last 30 Days
          </Button>
          <Button className="gap-2 shrink-0">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Retention Chart Mock */}
        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col h-96">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg">User Retention</h3>
              <p className="text-sm text-muted-foreground">Cohort analysis over 8 weeks.</p>
            </div>
            <LineChart className="w-5 h-5 text-muted-foreground" />
          </div>
          
          <div className="flex-1 border rounded-xl overflow-hidden bg-muted/5 flex flex-col">
            {/* Heatmap mock */}
            {[100, 85, 75, 60, 50, 45, 40].map((val, rowIdx) => (
              <div key={rowIdx} className="flex-1 flex border-b last:border-b-0">
                <div className="w-16 flex items-center justify-center text-xs text-muted-foreground font-medium border-r bg-muted/20">
                  Week {rowIdx}
                </div>
                {[val, val-10, val-15, val-25, val-30].map((opacity, colIdx) => {
                  if (colIdx > 6 - rowIdx) return <div key={colIdx} className="flex-1" />
                  return (
                    <div 
                      key={colIdx} 
                      className="flex-1 border-r last:border-r-0 flex items-center justify-center text-xs text-primary-foreground font-medium transition-colors hover:brightness-110 cursor-pointer"
                      style={{ backgroundColor: `rgba(59, 130, 246, ${Math.max(opacity / 100, 0.1)})` }}
                    >
                      {Math.max(opacity, 0)}%
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Demographics Mock */}
        <div className="bg-background border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col h-96">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg">Regional Demographics</h3>
              <p className="text-sm text-muted-foreground">Active users by region in Myanmar.</p>
            </div>
            <PieChart className="w-5 h-5 text-muted-foreground" />
          </div>
          
          <div className="flex-1 flex items-center gap-8">
            <div className="w-1/2 flex items-center justify-center">
              {/* Fake donut chart using CSS */}
              <div className="w-48 h-48 rounded-full border-[16px] border-muted/20 relative">
                <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-l-transparent rotate-45" />
                <div className="absolute inset-0 rounded-full border-[16px] border-purple-500 border-r-transparent border-b-transparent -rotate-12" />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold">14.2k</span>
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
              </div>
            </div>
            
            <div className="w-1/2 space-y-4">
              {[
                { region: "Yangon", value: "45%", color: "bg-primary" },
                { region: "Mandalay", value: "30%", color: "bg-purple-500" },
                { region: "Naypyidaw", value: "15%", color: "bg-muted" },
                { region: "Others", value: "10%", color: "bg-muted/50" },
              ].map((item) => (
                <div key={item.region} className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="flex-1 text-sm font-medium">{item.region}</span>
                  <span className="text-sm text-muted-foreground">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

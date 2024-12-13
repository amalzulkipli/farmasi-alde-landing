"use client"

import * as React from "react"
import { Search, ChevronDown, ChevronUp, ArrowUp, AlertCircle, Loader2, X } from 'lucide-react'
import Papa from "papaparse"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { InfoDialog } from "./InfoDialog"

interface PoisonData {
  Names: string
  Group: string
  "Group Description": string
  "": string
  "Part 1": string
  "_1": string
  "_2": string
  "Part II": string
  Exempt: string
}

const CSV_URL = "/data/first-schedule-poisons-04.02.2015.csv"

const GROUPS = [
  { id: "groupA", label: "Group A" },
  { id: "groupB", label: "Group B" },
  { id: "groupC", label: "Group C" },
  { id: "groupD", label: "Group D" },
]

export default function PoisonScheduleSearch() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [poisonData, setPoisonData] = React.useState<PoisonData[]>([])
  const [filteredData, setFilteredData] = React.useState<PoisonData[]>([])
  const [loading, setLoading] = React.useState(true)
  const [expandedItem, setExpandedItem] = React.useState<number | null>(null)
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [selectedGroups, setSelectedGroups] = React.useState<string[]>([])

  const searchInputRef = React.useRef<HTMLInputElement>(null)
  const resultsRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(CSV_URL)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const text = await response.text()
        
        Papa.parse<PoisonData>(text, {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          complete: (results) => {
            if (results.errors.length > 0) {
              setError("Error parsing poison schedule data")
              return
            }
            const data = results.data.slice(1)
            setPoisonData(data)
            setFilteredData(data)
          },
          error: () => setError("Error parsing poison schedule data")
        })
      } catch (error) {
        setError("Failed to load poison schedule data")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  React.useEffect(() => {
    setExpandedItem(null)
    const filtered = poisonData.filter(item => {
      const matchesSearch = item.Names.toLowerCase().includes(searchTerm.toLowerCase())
      if (selectedGroups.length === 0) return matchesSearch
      const hasGroupA = selectedGroups.includes("groupA") && item[""] && item[""] !== "-"
      const hasGroupB = selectedGroups.includes("groupB") && item["Part 1"] && item["Part 1"] !== "-"
      const hasGroupC = selectedGroups.includes("groupC") && item["_1"] && item["_1"] !== "-"
      const hasGroupD = selectedGroups.includes("groupD") && item["_2"] && item["_2"] !== "-"
      return matchesSearch && (hasGroupA || hasGroupB || hasGroupC || hasGroupD)
    })
    setFilteredData(filtered)
  }, [searchTerm, selectedGroups, poisonData])

  const toggleGroup = (groupId: string) => {
    setSelectedGroups(prev => {
      const isSelected = prev.includes(groupId)
      return isSelected ? prev.filter(id => id !== groupId) : [...prev, groupId]
    })
  }

  const resetFilters = () => {
    setSelectedGroups([])
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setExpandedItem(expandedItem === index ? null : index)
    }
  }

  const renderPart1 = (item: PoisonData) => {
    const groups = [
      { label: "Group A", value: item[""] },
      { label: "Group B", value: item["Part 1"] },
      { label: "Group C", value: item["_1"] },
      { label: "Group D", value: item["_2"] },
    ].filter(group => group.value && group.value !== "-")

    if (groups.length === 0) return null

    return (
      <section>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
          Part 1
        </h4>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          {groups.map((group, index) => (
            <React.Fragment key={group.label}>
              <div className="flex p-4">
                <div className="w-1/4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {group.label}
                  </Badge>
                </div>
                <div className="w-3/4 text-slate-600">{group.value}</div>
              </div>
              {index < groups.length - 1 && <hr className="border-slate-200" />}
            </React.Fragment>
          ))}
        </div>
      </section>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <Card className="max-w-5xl mx-auto border-blue-200/30">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Malaysia First Schedule Poisons List
          </CardTitle>
          <CardDescription className="text-slate-600 max-w-2xl mx-auto text-base">
            Search through the comprehensive database of scheduled poisons. Click on any item to view 
            detailed information about its classification.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" 
                         size={18} />
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Search by medication name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-200"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="h-9">
                          Filter by Group
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-56">
                        <div className="p-2">
                          {GROUPS.map((group) => (
                            <label
                              key={group.id}
                              className="flex items-center space-x-2 p-2 hover:bg-slate-100 rounded-md cursor-pointer"
                            >
                              <Checkbox
                                id={group.id}
                                checked={selectedGroups.includes(group.id)}
                                onCheckedChange={() => toggleGroup(group.id)}
                              />
                              <span className="text-sm">{group.label}</span>
                            </label>
                          ))}
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    {selectedGroups.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="h-9 px-2 text-slate-600 hover:text-slate-900"
                      >
                        Reset
                        <X className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <InfoDialog />
                </div>
              </div>

              <div ref={resultsRef} className="space-y-4">
                {loading ? (
                  <div className="text-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-blue-500 mx-auto" />
                    <p className="mt-4 text-slate-600">Loading poison schedule data...</p>
                  </div>
                ) : filteredData.length > 0 ? (
                  <AnimatePresence>
                    {filteredData.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card className={cn(
                          "overflow-hidden transition-all duration-200",
                          expandedItem === index && "ring-2 ring-blue-500"
                        )}>
                          <button
                            onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                            onKeyDown={(e) => handleKeyPress(e, index)}
                            className={cn(
                              "w-full px-6 py-4 flex items-start justify-between transition-colors",
                              expandedItem === index 
                                ? "bg-blue-50" 
                                : "hover:bg-slate-50"
                            )}
                            aria-expanded={expandedItem === index}
                          >
                            <div className="flex flex-col items-start text-left gap-2">
                              <div className="flex items-center gap-3 flex-wrap">
                                <span className="font-semibold text-lg text-slate-900">
                                  {item.Names}
                                </span>
                                {item.Group && (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                    {item.Group}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            {expandedItem === index ? (
                              <ChevronUp className="flex-shrink-0 text-blue-500" size={20} />
                            ) : (
                              <ChevronDown className="flex-shrink-0 text-slate-400" size={20} />
                            )}
                          </button>

                          <AnimatePresence>
                            {expandedItem === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="border-t border-slate-200"
                              >
                                <div className="px-6 py-4 bg-gradient-to-b from-blue-50/50">
                                  <div className="grid gap-6">
                                    {item["Group Description"] && (
                                      <section>
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                                          Classification Details
                                        </h4>
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                                          <p className="text-slate-700">{item["Group Description"]}</p>
                                        </div>
                                      </section>
                                    )}

                                    {renderPart1(item)}

                                    {item["Part II"] && item["Part II"] !== "-" && (
                                      <section>
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                                          Part II
                                        </h4>
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                                          <p className="text-slate-700 whitespace-pre-wrap">{item["Part II"]}</p>
                                        </div>
                                      </section>
                                    )}

                                    {item.Exempt && item.Exempt !== "-" && (
                                      <section>
                                        <h4 className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                                          Exemptions
                                        </h4>
                                        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                                          <p className="text-slate-700 whitespace-pre-wrap">{item.Exempt}</p>
                                        </div>
                                      </section>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                ) : (
                  <Card className="mx-auto max-w-md p-6 text-center">
                    <div className="mb-4">
                      <Search className="mx-auto h-12 w-12 text-slate-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-slate-900">No Results Found</h3>
                    <p className="text-slate-600 mb-4">
                      We couldn't find any poisons matching "{searchTerm}".
                    </p>
                    <div className="space-y-2 text-sm text-slate-500">
                      <p>Try:</p>
                      <ul className="list-disc list-inside">
                        <li>Checking for typos</li>
                        <li>Using fewer keywords</li>
                        <li>Using different search terms</li>
                        <li>Adjusting the group filters</li>
                      </ul>
                    </div>
                  </Card>
                )}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
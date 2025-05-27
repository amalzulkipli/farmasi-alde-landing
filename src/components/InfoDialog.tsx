"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { HelpCircle, AlertTriangle, BookOpen, FileText, Beaker, ShieldAlert } from 'lucide-react'

export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">About First Schedule Poisons List</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="flex justify-between items-start">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-2xl font-bold text-black flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              First Schedule Poisons List
            </DialogTitle>
            <DialogDescription className="text-lg text-black/80">
              Understanding Malaysia's Poison Classification System
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <ScrollArea className="h-[calc(80vh-120px)] pr-4">
          <div className="space-y-6 text-slate-700">
            <p className="leading-relaxed">
              The First Schedule Poisons List in Malaysia is a critical component of the Poisons Act 1952, 
              which regulates the control, sale, and distribution of poisons to ensure public safety. 
              This list categorizes various substances based on their toxicity and usage, establishing 
              guidelines for their handling.
            </p>
            
            <section>
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Structure of the List
              </h3>
              <p className="mb-2">The poisons are divided into two main parts:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium text-black">Part I:</span> Includes poisons classified 
                  into specific groups (A, B, C, D) based on their potential for harm and regulatory requirements.
                </li>
                <li>
                  <span className="font-medium text-black">Part II:</span> Lists poisons subject to 
                  less stringent controls compared to those in Part I.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <Beaker className="h-5 w-5" />
                Group Classifications
              </h3>
              <div className="grid gap-4">
                <div className="p-4 rounded-lg border bg-[#fdc35f]/20 border-[#fdc35f] text-amber-800">
                  <h4 className="font-semibold mb-2">Group A Poisons:</h4>
                  <p className="text-sm">
                    Highly toxic substances that can only be sold by licensed wholesalers to pharmacists 
                    or other licensed wholesalers. They require strict regulation due to their potential 
                    for misuse or harm.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-[#ffdb15]/20 border-[#ffdb15] text-amber-800">
                  <h4 className="font-semibold mb-2">Group B Poisons:</h4>
                  <p className="text-sm">
                    These poisons can only be dispensed with a prescription from a registered medical 
                    practitioner. They are used in treatments where professional diagnosis is essential.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-[#18e3a1]/20 border-[#18e3a1] text-emerald-800">
                  <h4 className="font-semibold mb-2">Group C Poisons:</h4>
                  <p className="text-sm">
                    These can be sold without a prescription but must be recorded in a Prescription Book. 
                    They are typically used for conditions where symptoms are easily recognizable.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-[#efa8f8]/20 border-[#efa8f8] text-purple-800">
                  <h4 className="font-semibold mb-2">Group D Poisons:</h4>
                  <p className="text-sm">
                    This group consists of chemicals primarily intended for laboratory use. Their sale is 
                    also regulated, requiring entries in specific records.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Part II Poisons
              </h3>
              <p>
                Part II poisons have fewer restrictions compared to Part I poisons and can be sold more 
                freely, although they still require proper labeling and adherence to safety regulations.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                Exempt Preparations
              </h3>
              <div className="p-4 rounded-lg border bg-red-100 border-red-300 text-red-800">
                <p>
                  An exempt preparation is defined as a mixture containing a poison that meets specific 
                  criteria outlined in the list, allowing it to bypass some of the stricter controls 
                  applied to other poisons.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-black mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Importance of Regulation
              </h3>
              <p className="mb-2">The classification system within the First Schedule serves multiple purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It helps prevent misuse and accidental poisoning by controlling access to dangerous substances.</li>
                <li>It ensures that healthcare professionals handle medications safely and responsibly.</li>
                <li>It provides clear guidelines for manufacturers, distributors, and retailers regarding 
                    the sale and management of these substances.</li>
              </ul>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}


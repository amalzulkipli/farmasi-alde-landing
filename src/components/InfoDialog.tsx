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
import { HelpCircle } from 'lucide-react'

export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <HelpCircle className="h-5 w-5" />
          <span className="sr-only">About First Schedule Poisons List</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>About First Schedule Poisons List</DialogTitle>
          <DialogDescription>
            Understanding Malaysia's Poison Classification System
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-slate-600">
          <p>
            The First Schedule Poisons List in Malaysia is a critical component of the Poisons Act 1952, 
            which regulates the control, sale, and distribution of poisons to ensure public safety. 
            This list categorizes various substances based on their toxicity and usage, establishing 
            guidelines for their handling.
          </p>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Structure of the List</h3>
            <p>The poisons are divided into two main parts:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <span className="font-medium text-slate-900">Part I:</span> Includes poisons classified 
                into specific groups (A, B, C, D) based on their potential for harm and regulatory requirements.
              </li>
              <li>
                <span className="font-medium text-slate-900">Part II:</span> Lists poisons subject to 
                less stringent controls compared to those in Part I.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Group Classifications</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-900">Group A Poisons:</h4>
                <p>Highly toxic substances that can only be sold by licensed wholesalers to pharmacists 
                   or other licensed wholesalers. They require strict regulation due to their potential 
                   for misuse or harm.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Group B Poisons:</h4>
                <p>These poisons can only be dispensed with a prescription from a registered medical 
                   practitioner. They are used in treatments where professional diagnosis is essential.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Group C Poisons:</h4>
                <p>These can be sold without a prescription but must be recorded in a Prescription Book. 
                   They are typically used for conditions where symptoms are easily recognizable.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-900">Group D Poisons:</h4>
                <p>This group consists of chemicals primarily intended for laboratory use. Their sale is 
                   also regulated, requiring entries in specific records.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Part II Poisons</h3>
            <p>Part II poisons have fewer restrictions compared to Part I poisons and can be sold more 
               freely, although they still require proper labeling and adherence to safety regulations.</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Exempt Preparations</h3>
            <p>An exempt preparation is defined as a mixture containing a poison that meets specific 
               criteria outlined in the list, allowing it to bypass some of the stricter controls 
               applied to other poisons.</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Importance of Regulation</h3>
            <p>The classification system within the First Schedule serves multiple purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>It helps prevent misuse and accidental poisoning by controlling access to dangerous substances.</li>
              <li>It ensures that healthcare professionals handle medications safely and responsibly.</li>
              <li>It provides clear guidelines for manufacturers, distributors, and retailers regarding 
                  the sale and management of these substances.</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 
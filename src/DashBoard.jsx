import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Sidebar } from "./Sidebar";

function DashBoard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Invoices</h1>
          <Button className="bg-black text-white">Create invoice</Button>
        </div>

        <Tabs defaultValue="draft" className="mb-6">
          <TabsList>
            <TabsTrigger value="draft">Draft (0)</TabsTrigger>
            <TabsTrigger value="unpaid">Unpaid (0)</TabsTrigger>
            <TabsTrigger value="paid">Paid (0)</TabsTrigger>
            <TabsTrigger value="void">Void (0)</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="text-center mt-12">
          <Card className="p-10 w-full max-w-md mx-auto">
            <p className="text-lg font-medium mb-2">Create an invoice</p>
            <p className="text-gray-500 mb-4">
              Let customers pay how they want while you receive what you want.
            </p>
            <Button className="bg-black text-white">+ Create invoice</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
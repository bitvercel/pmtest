"use client";

import { useState } from "react";
import { Plus, Upload, X, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ImportStakeholders } from "./import/ImportStakeholders";
import { StakeholderField } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface StakeholderRole {
  id: string;
  name: string;
  fields: StakeholderField[];
  data: Record<string, any>[];
}

interface StakeholderTabProps {
  projectId: string;
}

type StakeholderView = "list" | "import" | "define";

export function StakeholderTab({ projectId }: StakeholderTabProps) {
  const [currentView, setCurrentView] = useState<StakeholderView>("list");
  const [selectedType, setSelectedType] = useState<string>("girls");
  const [newFields, setNewFields] = useState<Omit<StakeholderField, "id">[]>([
    { name: "", type: "text", required: false }
  ]);
  const [roleName, setRoleName] = useState("");
  const [editingRole, setEditingRole] = useState<StakeholderRole | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const [stakeholderRoles, setStakeholderRoles] = useState<StakeholderRole[]>([
    {
      id: "girls",
      name: "Girls",
      fields: [
        { id: "name", name: "Full Name", type: "text", required: true },
        { id: "age", name: "Age", type: "number", required: true },
        { id: "location", name: "Location", type: "text", required: true },
        { id: "educationLevel", name: "Education Level", type: "text", required: true },
        { id: "familyBackground", name: "Family Background", type: "text", required: false },
      ],
      data: [
        {
          "Full Name": "Sarah Johnson",
          "Age": "15",
          "Location": "Mumbai, India",
          "Education Level": "9th Grade",
          "Family Background": "Single parent, low income",
        },
        {
          "Full Name": "Maria Garcia",
          "Age": "16",
          "Location": "Bogotá, Colombia",
          "Education Level": "10th Grade",
          "Family Background": "Orphan, living with relatives",
        },
      ],
    },
    {
      id: "tutors",
      name: "Tutors",
      fields: [
        { id: "name", name: "Full Name", type: "text", required: true },
        { id: "expertise", name: "Expertise", type: "text", required: true },
        { id: "email", name: "Email", type: "email", required: true },
        { id: "yearsOfExperience", name: "Years of Experience", type: "number", required: true },
        { id: "availability", name: "Availability", type: "text", required: false },
      ],
      data: [
        {
          "Full Name": "Dr. Emily Chen",
          "Expertise": "Computer Science",
          "Email": "emily.chen@example.com",
          "Years of Experience": "8",
          "Availability": "Weekday evenings",
        },
        {
          "Full Name": "James Wilson",
          "Expertise": "Web Development",
          "Email": "james.wilson@example.com",
          "Years of Experience": "5",
          "Availability": "Weekends",
        },
      ],
    },
  ]);

  const currentRole = stakeholderRoles.find(role => role.id === selectedType);

  const addField = () => {
    setNewFields([...newFields, { name: "", type: "text", required: false }]);
  };

  const removeField = (index: number) => {
    setNewFields(newFields.filter((_, i) => i !== index));
  };

  const updateField = (index: number, field: Partial<Omit<StakeholderField, "id">>) => {
    setNewFields(
      newFields.map((f, i) => (i === index ? { ...f, ...field } : f))
    );
  };

  const handleCreateRole = () => {
    if (!roleName || newFields.some(f => !f.name)) return;

    const newRole: StakeholderRole = {
      id: roleName.toLowerCase().replace(/\s+/g, '-'),
      name: roleName,
      fields: newFields.map((f, i) => ({ ...f, id: `${i}` })),
      data: [],
    };

    setStakeholderRoles([...stakeholderRoles, newRole]);
    setSelectedType(newRole.id);
    setCurrentView("list");
    setNewFields([{ name: "", type: "text", required: false }]);
    setRoleName("");
  };

  const handleEditRole = (role: StakeholderRole) => {
    setEditingRole(role);
    setNewFields(role.fields.map(({ id, ...rest }) => rest));
    setRoleName(role.name);
    setEditDialogOpen(true);
  };

  const handleUpdateRole = () => {
    if (!editingRole || !roleName || newFields.some(f => !f.name)) return;

    const updatedRole: StakeholderRole = {
      ...editingRole,
      name: roleName,
      fields: newFields.map((f, i) => ({ ...f, id: `${i}` })),
    };

    setStakeholderRoles(roles => 
      roles.map(r => r.id === editingRole.id ? updatedRole : r)
    );

    setEditDialogOpen(false);
    setEditingRole(null);
    setNewFields([{ name: "", type: "text", required: false }]);
    setRoleName("");
    toast.success("Role updated successfully");
  };

  return (
    <div className="space-y-8">
      {currentView === "list" && (
        <>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Stakeholder Management</h2>
            <div className="flex gap-2">
              <Button onClick={() => setCurrentView("define")} className="bg-black hover:bg-black/90">
                <Plus className="mr-2 h-4 w-4" />
                Define Stakeholder Role
              </Button>
            </div>
          </div>

          <Tabs value={selectedType} onValueChange={setSelectedType}>
            <div className="flex items-center justify-between mb-4">
              <TabsList className="grid w-[400px] grid-cols-4">
                {stakeholderRoles.map(role => (
                  <TabsTrigger key={role.id} value={role.id}>
                    {role.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {currentRole && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditRole(currentRole)}
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit Role
                </Button>
              )}
            </div>

            <div className="mt-8">
              {currentRole && (
                <>
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-sm font-medium text-muted-foreground">
                      {currentRole.name}
                    </h3>
                    <Button variant="outline" onClick={() => setCurrentView("import")}>
                      <Upload className="mr-2 h-4 w-4" />
                      Import {currentRole.name}
                    </Button>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        {currentRole.fields.map((field) => (
                          <TableHead key={field.id}>{field.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentRole.data.map((item, index) => (
                        <TableRow key={index}>
                          {currentRole.fields.map(field => (
                            <TableCell key={field.id}>{item[field.name]}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </div>
          </Tabs>
        </>
      )}

      {currentView === "import" && currentRole && (
        <ImportStakeholders
          onClose={() => setCurrentView("list")}
          fields={currentRole.fields}
          stakeholderType={currentRole.name}
        />
      )}

      {currentView === "define" && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setCurrentView("list")}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <h2 className="text-lg font-semibold">Define New Stakeholder Role</h2>
          </div>

          <div className="bg-white border rounded-lg p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="roleName">Role Name</Label>
                <Input
                  id="roleName"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  placeholder="e.g., Student, Mentor, Teacher"
                  className="max-w-md"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-medium">Fields</h4>
                  <Button onClick={addField} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Field
                  </Button>
                </div>

                {newFields.map((field, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <Input
                      placeholder="Field name"
                      value={field.name}
                      onChange={(e) =>
                        updateField(index, { name: e.target.value })
                      }
                    />
                    <Select
                      value={field.type}
                      onValueChange={(value: any) =>
                        updateField(index, { type: value })
                      }
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Text</SelectItem>
                        <SelectItem value="number">Number</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                        <SelectItem value="date">Date</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`required-${index}`}
                        checked={field.required}
                        onCheckedChange={(checked) =>
                          updateField(index, { required: !!checked })
                        }
                      />
                      <label
                        htmlFor={`required-${index}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Required
                      </label>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeField(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleCreateRole} 
                className="bg-black hover:bg-black/90"
                disabled={!roleName || newFields.some(f => !f.name)}
              >
                Create Role
              </Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Stakeholder Role</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="editRoleName">Role Name</Label>
              <Input
                id="editRoleName"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                placeholder="e.g., Student, Mentor, Teacher"
                className="max-w-md"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium">Fields</h4>
                <Button onClick={addField} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Field
                </Button>
              </div>

              {newFields.map((field, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <Input
                    placeholder="Field name"
                    value={field.name}
                    onChange={(e) =>
                      updateField(index, { name: e.target.value })
                    }
                  />
                  <Select
                    value={field.type}
                    onValueChange={(value: any) =>
                      updateField(index, { type: value })
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="number">Number</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="date">Date</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`edit-required-${index}`}
                      checked={field.required}
                      onCheckedChange={(checked) =>
                        updateField(index, { required: !!checked })
                      }
                    />
                    <label
                      htmlFor={`edit-required-${index}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Required
                    </label>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeField(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  setEditDialogOpen(false);
                  setEditingRole(null);
                  setNewFields([{ name: "", type: "text", required: false }]);
                  setRoleName("");
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleUpdateRole}
                disabled={!roleName || newFields.some(f => !f.name)}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userProfile } from '@/lib/data';

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Your Profile"
        description="Manage your personal, health, and account information."
      />
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            This information is kept private and secure.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={userProfile.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" defaultValue={userProfile.dob} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={userProfile.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue={userProfile.phone} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue={userProfile.address} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Health Information</CardTitle>
          <CardDescription>
            Share relevant health data with your providers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="conditions">Known Health Conditions</Label>
              <Input id="conditions" defaultValue={userProfile.healthConditions} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Input id="allergies" defaultValue={userProfile.allergies} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency-name">Emergency Contact Name</Label>
              <Input id="emergency-name" defaultValue={userProfile.emergencyContactName} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emergency-phone">Emergency Contact Phone</Label>
              <Input id="emergency-phone" type="tel" defaultValue={userProfile.emergencyContactPhone} />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save Health Info</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

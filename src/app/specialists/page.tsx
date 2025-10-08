
'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { specialists } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ConsultationBookingForm } from '@/components/consultation-booking-form';

export default function SpecialistsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [professionTerm, setProfessionTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  const filteredSpecialists = specialists.filter((specialist) => {
    const matchesSearch = specialist.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesProfession = specialist.specialty
      .toLowerCase()
      .includes(professionTerm.toLowerCase());
    const matchesSpecialty =
      specialtyFilter === 'all' || specialist.specialty === specialtyFilter;
    return matchesSearch && matchesProfession && matchesSpecialty;
  });

  const uniqueSpecialties = [
    ...new Set(specialists.map((s) => s.specialty)),
  ];

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Find a Specialist"
        description="Browse and connect with healthcare professionals."
      />

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <Input
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <Input
                placeholder="Search by profession..."
                value={professionTerm}
                onChange={(e) => setProfessionTerm(e.target.value)}
              />
            </div>
            <div className="flex-1 md:max-w-xs">
              <Select
                value={specialtyFilter}
                onValueChange={setSpecialtyFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {uniqueSpecialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpecialists.map((specialist) => {
            const avatar = PlaceHolderImages.find(p => p.id === specialist.avatarId);
            return (
              <Card key={specialist.id}>
                <CardHeader className="items-center text-center">
                  <Avatar className="h-24 w-24 border-2 border-primary">
                    {avatar && <Image src={avatar.imageUrl} alt={avatar.description} width={96} height={96} data-ai-hint={avatar.imageHint} />}
                    <AvatarFallback>{specialist.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="pt-2">{specialist.name}</CardTitle>
                  <CardDescription>{specialist.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <p className="text-center text-sm text-muted-foreground">
                    {specialist.bio}
                  </p>
                  <ConsultationBookingForm specialist={specialist} />
                </CardContent>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

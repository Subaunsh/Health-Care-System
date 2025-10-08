
export const vitalsData = [
  { date: 'Mon', 'Heart Rate': 72, 'Blood Pressure': 120 },
  { date: 'Tue', 'Heart Rate': 75, 'Blood Pressure': 122 },
  { date: 'Wed', 'Heart Rate': 69, 'Blood Pressure': 118 },
  { date: 'Thu', 'Heart Rate': 71, 'Blood Pressure': 121 },
  { date: 'Fri', 'Heart Rate': 78, 'Blood Pressure': 125 },
  { date: 'Sat', 'Heart Rate': 74, 'Blood Pressure': 123 },
  { date: 'Sun', 'Heart Rate': 70, 'Blood Pressure': 119 },
];

export const activityData = [
  { date: 'Mon', 'Steps': 8500 },
  { date: 'Tue', 'Steps': 9200 },
  { date: 'Wed', 'Steps': 7800 },
  { date: 'Thu', 'Steps': 10500 },
  { date: 'Fri', 'Steps': 6500 },
  { date: 'Sat', 'Steps': 12300 },
  { date: 'Sun', 'Steps': 8234 },
];

export const sleepData = [
    { date: 'Mon', 'Hours': 7.5 },
    { date: 'Tue', 'Hours': 8 },
    { date: 'Wed', 'Hours': 6.5 },
    { date: 'Thu', 'Hours': 7 },
    { date: 'Fri', 'Hours': 8.2 },
    { date: 'Sat', 'Hours': 7.8 },
    { date: 'Sun', 'Hours': 7.75 },
];

export const medications = [
    { id: 'med1', name: 'Lisinopril', dosage: '10mg', frequency: 'Once a day', status: 'Active' },
    { id: 'med2', name: 'Metformin', dosage: '500mg', frequency: 'Twice a day', status: 'Active' },
    { id: 'med3', name: 'Atorvastatin', dosage: '20mg', frequency: 'Once daily at bedtime', status: 'Active' },
    { id: 'med4', name: 'Amoxicillin', dosage: '500mg', frequency: 'Every 8 hours', status: 'Finished' },
];

export const upcomingAppointments = [
    { id: 'apt1', doctor: 'Dr. Evelyn Reed', specialty: 'Cardiologist', date: '2024-08-15', time: '10:30 AM', avatarId: 'doc1' },
    { id: 'apt2', doctor: 'Dr. Ben Carter', specialty: 'General Practitioner', date: '2024-08-22', time: '02:00 PM', avatarId: 'doc2' },
];

export const pastAppointments = [
    { id: 'apt3', doctor: 'Dr. Ben Carter', specialty: 'General Practitioner', date: '2024-07-10', notes: 'Routine check-up. All vitals normal.' },
];

export const userProfile = {
    name: 'Alex Doe',
    dob: '1985-05-20',
    email: 'alex.doe@email.com',
    phone: '555-123-4567',
    address: '123 Health St, Wellness City, 98765',
    emergencyContactName: 'Jane Doe',
    emergencyContactPhone: '555-765-4321',
    healthConditions: 'Hypertension, Type 2 Diabetes',
    allergies: 'Penicillin',
};

export const specialists = [
    { id: 'doc1', name: 'Dr. Evelyn Reed', specialty: 'Cardiologist', avatarId: 'doc1', bio: 'Expert in treating heart conditions and promoting cardiovascular wellness.' },
    { id: 'doc2', name: 'Dr. Ben Carter', specialty: 'General Practitioner', avatarId: 'doc2', bio: 'Providing comprehensive primary care for all ages.' },
    { id: 'doc3', name: 'Dr. Olivia Chen', specialty: 'Dermatologist', avatarId: 'doc3', bio: 'Specializing in skin health, from acne to anti-aging treatments.' },
    { id: 'doc4', name: 'Dr. Marcus Lowe', specialty: 'Orthopedist', avatarId: 'doc4', bio: 'Focused on musculoskeletal issues, including sports injuries and joint pain.' },
    { id: 'doc5', name: 'Dr. Sofia Ramirez', specialty: 'Pediatrician', avatarId: 'doc5', bio: 'Dedicated to the health and well-being of children and adolescents.' },
    { id: 'doc6', name: 'Dr. Kenji Tanaka', specialty: 'Neurologist', avatarId: 'doc6', bio: 'Treating disorders of the nervous system, including headaches and memory issues.' },
];

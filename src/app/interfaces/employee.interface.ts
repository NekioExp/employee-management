export interface EmployeeInterface {
  name: string;
  surname: string;
  birthdate: Date;
  position?: 'Junior' | 'Senior' | 'Other';
  otherPosition?: string; // This variable will be used when position is 'Other'
}

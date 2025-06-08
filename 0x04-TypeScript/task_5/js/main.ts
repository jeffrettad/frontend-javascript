// Interface for MajorCredits with branding
export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

// Interface for MinorCredits with branding
export interface MajorCredits {
  _majorCreditBrand: void;
  credits: number;
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

// Export for usage/testing

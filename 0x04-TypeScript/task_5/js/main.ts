// Interface for MajorCredits with branding
interface MajorCredits {
  credits: number;
  readonly _majorBrand: 'major';
}

// Interface for MinorCredits with branding
interface MinorCredits {
  credits: number;
  readonly _minorBrand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'major'
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'minor'
  };
}

// Export for usage/testing
export {
  MajorCredits,
  MinorCredits,
  sumMajorCredits,
  sumMinorCredits
};

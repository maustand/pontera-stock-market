export interface AuthSignInOutFormStatus {
  isValid: boolean;
  values: {
    email: string;
    password: string;
  };
}


export interface AuthSignInOutFormValues {
  email: string;
  password: string;
}

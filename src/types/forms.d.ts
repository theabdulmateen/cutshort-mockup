declare namespace Forms {
  interface UserDetailsForm {
    fullName: string;
    displayName: string;
  }

  interface WorkspaceForm {
    name: string;
    url?: string;
  }

  interface UseCaseForm {
    plan: 'self' | 'team';
  }
}

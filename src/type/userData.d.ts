interface User {
  id: string;
  full_name: string;
  email: string;
  role: string;
}

interface UserData {
  user: User;
  token: string;
}

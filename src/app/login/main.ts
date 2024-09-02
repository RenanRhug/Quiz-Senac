interface User {
  id: string;
  password: string;
}

let dataA: User[] = [];

async function loadUserData(): Promise<void> {
  try {
    const response = await fetch('./login.json');
    const data = await response.json();
    dataA = data.users;
  } catch (error) {
    console.error('Error loading user data:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadUserData);

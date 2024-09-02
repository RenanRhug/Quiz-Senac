async function enter(nome: string): Promise<void> {
  alert('Seja bem-vindo ' + nome + '!');
  window.location.href = 'quiz.page.html';
}

async function logon(event: Event): Promise<void> {
  event.preventDefault();

  const id = (document.getElementById('id') as HTMLIonInputElement).value;
  const password = (document.getElementById('password') as HTMLIonInputElement)
    .value;

  localStorage.setItem('currentUser', String(id) ?? '');

  for (const user of dataA) {
    if (id === user.id && password === user.password) {
      await enter(id);
      return;
    }
  }

  alert('Seu login e/ou senha não estão corretos.\nTente novamente.');
}

function logout(): void {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    alert('Você saiu, ' + currentUser);
    window.location.href = 'home.page.html';
    localStorage.removeItem('currentUser');
  }
}

// Attach the logon function to the global window object
window.logon = logon;

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.login');
  if (loginButton) {
    loginButton.addEventListener('click', logon);
  }
});

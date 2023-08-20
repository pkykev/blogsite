const loginSubmit = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#loginEmail').value.trim();
  const password = document.querySelector('#loginPassword').value.trim();

  console.log('login click')
  console.log(email)
  console.log(password)
  if (email && password) {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      console.log('login good!');
      document.location.replace('/')
    } else {
      // put any alert or however yuo want to notify user wrong info here
      console.log('give up, login failed')
    }
  }
}

const newUser = async (event) => {
  // prevent reload so we can use JS for inputs
  event.preventDefault();
  // grabs fname and trims all spaces
  // these variable names are important to correspond with the user model so they can be passed direclty through req.body
  const email = document.querySelector('#newEmail').value.trim();
  const password = document.querySelector('#newPassword').value.trim();
  console.log('new click')
  console.log(email)
  console.log(password)
  if (email && password) {
    const response = await fetch('/new', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      // here we would set up the redirect to profile
      // we can do stuff in here like set a req.session var to check for persistent logged in status
      console.log('we did it!')
      document.location.replace('/')

    } else {
      // here is where we would throw alert for bad info
      console.log('give up we cant do this')
    }
  }
}












document.querySelector('#newuser').addEventListener('click', newUser);
document.querySelector('#login').addEventListener('click', loginSubmit);
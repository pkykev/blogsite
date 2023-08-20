const signUp = async (event) => {
  event.preventDefault();
  document.location.replace('/login')
}

document.querySelector('#signup').addEventListener('click', signUp)

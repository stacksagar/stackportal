const darkToggle = (theme) => {
  if (theme == 'dark') {
    document.documentElement.classList.add('dark');  
  } else if (theme == 'light') {
    document.documentElement.classList.remove('dark');
  }
};

export default darkToggle;

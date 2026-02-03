const handleHashScroll = (hash: string) => {
  const id = hash.replace('#', '');

  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

export default handleHashScroll
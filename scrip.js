  function scrollToSection(contact) {
    var section = document.getElementById(contact);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
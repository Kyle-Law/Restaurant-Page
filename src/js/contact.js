import appendChildren from './helpers';

const contact = (() => {
  const createContactForm = () => {
    const form = document.createElement('form');
    form.setAttribute('id', 'contact-form');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('type', 'text');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = 'Email';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('type', 'email');

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    messageLabel.textContent = 'Message';
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('form', 'contact-form');

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');

    appendChildren(form, [
      nameLabel,
      nameInput,
      emailLabel,
      emailInput,
      messageLabel,
      messageInput,
      submit,
    ]);
    return form;
  };

  const createContactSection = () => {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact');

    appendChildren(contactSection, [createContactForm()]);
    return contactSection;
  };
  return createContactSection();
})();

export default contact;
